const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getActivities = async (req, res) => {
    try {
        const activities = await prisma.activities.findMany();
        return res.status(200).json(activities);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};





// exports.createActivity = async (req, res) => {
//     try {
//         if (!req.body.title) {
//             return res.status(422).json({ error: "title is required" })
//         }

//         if (await prisma.activities.findUnique({ where: { title: req.body.name } })) {
//             return res.status(409).json({ error: `${req.body.title}, this activity already exist` })
//         }

//         const newActivity = await prisma.activities.create({
//             data: {
//                 title: req.body.title
//             }
//         })
        
//         return res.status(201).json(newActivity)
//     } catch (error) {
//         return res.status(500).json({ error: error.message })
//     }
// }