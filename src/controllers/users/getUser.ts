import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { db } from '../../database/db';
import { eq } from 'drizzle-orm';

const getUser = async (req: Request, res: Response) => {
    const id = req.body.id;

    try {
        const result = await db.select().from(User).where(eq(User.id, id));

        if (result.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user: result });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ success: false, message: "Error fetching user", error });
    }
}

export default getUser;
