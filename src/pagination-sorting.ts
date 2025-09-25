import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const paginationSoring  = async() =>{
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    })

    const offsetData1 = await prisma.post.findMany({
        skip: 0,
        take: 5,
        cursor:{
            id : 40
        }
    })

    const sorting = await prisma.post.findMany({
        orderBy:{
            id: "desc"
        },
        skip: 3,
        take: 5,
        where:{
            title: "title 1"
        }
           
    })

    console.log(sorting)
}

paginationSoring ()