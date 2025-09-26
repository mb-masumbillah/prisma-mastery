import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // const result = await prisma.post.createMany({
  //     data: [
  //         {
  //             title: "title 1",
  //             content: "content 1",
  //             authorId: 1
  //         },
  //         {
  //             title: "title 1",
  //             content: "content 1",
  //             authorId: 1
  //         },
  //     ]
  // })

  // const createUser = await prisma.user.create({
  //     data: {
  //         user_name: "user1",
  //         email: "user1@ph.com",
  //         role: UserRole.user
  //     }
  // });

  // const createProfile  = await prisma.profile.create({
  //     data:{
  //         bio: "this is bio .........",
  //         userId: 1
  //     }
  // })

//   const createCategory  = await prisma.category.create({
//       data:{
//           name: 'software development'
//       },
//   }, )

  const createPost = await prisma.post.create({
    data: {
      title: "this is title 5",
      content: "this is content of the post. 5",
      authorId: 7,
      //   PostCategory: {
      //     create: {
      //       category: {
      //         connect: {
      //           id: 1,
      //         },
      //       },
      //     },
      //   },
      PostCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
      
    },
    include:{
        PostCategory: true
    }
  });

  console.log(createPost);
};

main();
