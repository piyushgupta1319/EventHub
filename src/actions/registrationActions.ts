"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function registerForEvent(
  userId: string,
  eventId: string
) {
  try {
    // Prevent duplicate registration
    const existingRegistration =
      await prisma.registration.findUnique({
        where: {
          userId_eventId: {
            userId,
            eventId,
          },
        },
      });

    if (existingRegistration) {
      return {
        success: false,
        message: "Already registered",
      };
    }

    await prisma.registration.create({
      data: {
        userId,
        eventId,
      },
    });

    return {
      success: true,
      message: "Registration successful",
    };
  } catch (error) {
  console.error(error);

  return {
    success: false,
    message: String(error),
  };
}
}

export async function getUserRegistrations(
  userId: string
) {
  return await prisma.registration.findMany({
    where: {
      userId,
    },
    include: {
      event: true,
    },
  });
}

export async function cancelRegistration(
  registrationId: string
) {
  await prisma.registration.delete({
    where: {
      id: registrationId,
    },
  });

  revalidatePath("/dashboard/my-events");
}

export async function getUserCertificates(userId: string) {
  try {
    // Get all user registrations with event details
    const registrations = await prisma.registration.findMany({
      where: {
        userId,
        status: "confirmed", // Only show certificates for confirmed registrations
      },
      include: {
        event: true,
        user: true,
      },
      orderBy: {
        registeredAt: "desc",
      },
    });

    // Transform registrations into certificate format
    const certificates = registrations.map((registration, index) => ({
      id: registration.id,
      certificateId: `CERT-${registration.user.id.slice(0, 8).toUpperCase()}-${String(index + 1).padStart(4, "0")}`,
      userName: registration.user.name,
      title: registration.event.title,
      issuer: "Event Management System",
      date: new Date(registration.registeredAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      eventId: registration.eventId,
    }));

    return certificates;
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return [];
  }
}