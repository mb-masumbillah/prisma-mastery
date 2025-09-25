import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.delete({
  //     where: {
  //       id: 27,
  //     },
  //   });

  //   const result1 = await prisma.post.deleteMany({
  //     where: {
  //       title: "title 1"
  //     },
  //   });
  const result1 = await prisma.post.deleteMany({});

  console.log(result1);
};
main();
