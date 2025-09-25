import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const getAllFromData = await prisma.post.findMany({
    select: {
      title: true,
      content:true
    },
  });

  const getSingleFromData1 = await prisma.post.findMany({
    where: {
      published: false,
    },
  });

  // find first and find first or throw error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // find unique and find unique or throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 28,
    },
    select: {
      title: true,
    },
  });

  console.log(getAllFromData);
};

main();
