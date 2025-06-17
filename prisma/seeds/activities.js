const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const activities = await prisma.activity.createMany({
        data: [
            {id: 1, title: "Un café/thé"},
            {id: 2, title: "Un repas"},
            {id: 3, title: "Une promenade"},
            {id: 4, title: "Une sortie culturelle"},
            {id: 5, title: "Autre activité"}
        ],
        skipDuplicates: true,
    })
    console.log({ activities });
}

