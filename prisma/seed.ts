// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.event.createMany({
    data: [
      {
        title: "React.js Advanced Concepts Workshop",
        description: "Deep dive into advanced React concepts.",
        category: "Technical",
        location: "Tech Lab, Building A",
        eventDate: new Date("2026-06-15"),
      },

      {
        title: "Coding Challenge 2026",
        description: "Competitive programming challenge.",
        category: "Technical",
        location: "Computer Lab, Building B",
        eventDate: new Date("2026-06-18"),
      },

      {
        title: "Cultural Night 2026",
        description: "Music, dance and art performances.",
        category: "Cultural",
        location: "Main Auditorium",
        eventDate: new Date("2026-06-22"),
      },

      {
        title: "Annual Basketball Tournament",
        description: "Inter-college basketball championship.",
        category: "Sports",
        location: "Sports Complex",
        eventDate: new Date("2026-06-25"),
      },

      {
        title: "Web Development Bootcamp",
        description: "Complete full-stack workshop.",
        category: "Workshops",
        location: "Tech Hub, Building C",
        eventDate: new Date("2026-06-28"),
      },

      {
        title: "AI & Machine Learning Summit",
        description: "Industry experts discuss AI trends.",
        category: "Technical",
        location: "Conference Hall",
        eventDate: new Date("2026-07-05"),
      }
    ]
  });

  console.log("Events added successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });