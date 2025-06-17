const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getElders = async (req, res) => {
    try {
        const elders = await prisma.elders.findMany();
        return res.status(200).json(elders);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};