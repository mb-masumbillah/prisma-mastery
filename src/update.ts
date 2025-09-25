import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

const main = async() =>{
    // const result = await prisma.post.update({
    //     where: {
    //         id:27
    //     },
    //     data:{
    //         title: "title 27"
    //     }
    // })


    // const result2 = await prisma.post.updateMany({
    //     where : {
    //         title: "title 1"
    //     },
    //     data:{
    //         published: true
    //     }
    // })


    const result3 = await prisma.post.upsert({
        where:{
            id: 29
        },
        create:{
            title: "title 1",
            authorId: 0
        },
        update:{
            content: "content 1"
        }
    })

    console.log(result3)
}

main()