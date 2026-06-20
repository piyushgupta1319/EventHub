import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { eventId } = body;

    if (!eventId) {
      return NextResponse.json({ success: false, message: "Missing eventId" }, { status: 400 });
    }

    const userId = session.user.id as string;

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID not found in session" }, { status: 400 });
    }

    // Verify user exists
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Verify event exists
    const eventExists = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!eventExists) {
      return NextResponse.json({ success: false, message: "Event not found" }, { status: 404 });
    }

    // Prevent duplicate registration
    const existing = await prisma.registration.findUnique({
      where: { userId_eventId: { userId, eventId } },
    });

    if (existing) {
      return NextResponse.json({ success: false, message: "Already registered for this event" }, { status: 200 });
    }

    await prisma.registration.create({ data: { userId, eventId } });
    
    // Revalidate event pages and dashboard so counts update
    try {
      revalidatePath(`/events/${eventId}`);
      revalidatePath(`/events`);
      revalidatePath(`/dashboard`);
      revalidatePath(`/dashboard/my-events`);
    } catch (e) {
      console.warn("revalidatePath warning:", e);
    }

    return NextResponse.json({ success: true, message: "Registration successful" }, { status: 200 });
  } catch (err: any) {
    console.error("/api/register error:", err);

    // Better error messages for debugging
    if (err.code === 'P2002') {
      return NextResponse.json({ success: false, message: "Already registered for this event" }, { status: 409 });
    }
    if (err.code === 'P2025') {
      return NextResponse.json({ success: false, message: "User or event not found" }, { status: 404 });
    }

    return NextResponse.json({ success: false, message: "Registration failed. Please try again." }, { status: 500 });
  }
}
