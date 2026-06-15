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

    // Prevent duplicate registration
    const existing = await prisma.registration.findUnique({
      where: { userId_eventId: { userId, eventId } },
    });

    if (existing) {
      return NextResponse.json({ success: false, message: "Already registered" }, { status: 200 });
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

    // Prisma unique constraint or foreign key errors will show here
    return NextResponse.json({ success: false, message: String(err) }, { status: 500 });
  }
}
