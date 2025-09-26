import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  // console.log(e)
  console.log("Query", e.query);
  console.log("Duration", e.duration, ' ms');
  console.log("Date & Time", e.timestamp);
});

const main = async () => {
  const getAllFromData = await prisma.user.findMany();
  // console.log(getAllFromData)
};

main();
