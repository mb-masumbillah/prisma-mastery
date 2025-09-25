import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

const main = async() =>{
    const result = await prisma.post.createMany({
        data: [
            {
                title: "title 1",
                content: "content 1",
                authorId: 1
            },
            {
                title: "title 1",
                content: "content 1",
                authorId: 1
            },
            {
                title: "title 1",
                content: "content 1",
                authorId: 1
            },
            {
                title: "title 1",
                content: "content 1",
                authorId: 1
            },
           
        ]
    })

    console.log(result)
}

main()