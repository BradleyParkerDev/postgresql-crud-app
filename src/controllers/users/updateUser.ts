import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { db } from '../../database/db';
import { eq } from 'drizzle-orm';

const updateUser = async (req: Request, res: Response) => {
    const userUpdates = req.body;
    console.log(userUpdates)
    try {
        const response = await db.update(User)
            .set(userUpdates)
            .where(eq(User.id, userUpdates.id))
            .returning({ updatedUser: {...User} });

        console.log(response)

        if (response.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }


        return res.status(200).json({ success: true, message: 'User updated successfully.', response });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ success: false, message: "Error updating user", error });
    }
}

export default updateUser;

