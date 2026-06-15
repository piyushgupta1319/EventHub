"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    return false;
  }

  return true;
}

export async function createEvent(
  title: string,
  description: string,
  category: string,
  location: string,
  eventDate: Date,
  capacity: number
) {
  const isAdmin = await requireAdmin();

  if (!isAdmin) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    await prisma.event.create({
      data: {
        title,
        description,
        category,
        location,
        eventDate,
        capacity,
      },
    });

    return {
      success: true,
      message: "Event created successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create event",
    };
  }
}

export async function deleteEvent(
  eventId: string
) {
  try {

    await prisma.event.delete({
      where: {
        id: eventId,
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");

    return {
      success: true,
      message: "Event deleted successfully",
    };

  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to delete event",
    };

  }
}

export async function updateEvent(
  id: string,
  title: string,
  description: string,
  category: string,
  location: string,
  capacity: number
) {
  try {
    await prisma.event.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        category,
        location,
        capacity,
      },
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");

    return redirect("/admin/events");
    
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to update event",
    };
  }
}