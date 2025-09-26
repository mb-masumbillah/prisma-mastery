import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const filting = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "this",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user1", // endsWith, contains, equals
      },
    },
  });

  const userNameArray = ["user1", "user2", "user5"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      user_name: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findMany({
    where: {
      id: 7,
    },
    include: {
      Post: {
        include: {
          PostCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
  //   console.log(inDepthData);
};

filting();
