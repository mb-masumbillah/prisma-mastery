import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationQuery = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 7,
      },
      // include: {
      //     Post: true
      // },
      // select: {
      //   email: true,
      // },
    })
    .Post();

  // relational fillters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationQuery();
