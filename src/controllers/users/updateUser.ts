import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { db } from '../../database/db';
import { eq } from 'drizzle-orm';
import { authUtil } from '../../auth';

const updateUser = async (req: Request, res: Response) => {


    try {

        // Ensure req.decoded is set by the authorizeUser middleware
        const id = req.decoded?.userData?.userId;

        if (!id) {
            return res.status(400).json({ message: "User ID is missing from request" });
        }
        
        const userToUpdate = req.body

        // hash password if in req.body
        if(userToUpdate.password){
            const saltRounds = 5;
            const passwordHash = await authUtil.generatePasswordHash(req.body.password, saltRounds)
            userToUpdate.password = passwordHash;
        }

        // response returns as an array with an object
        const response = await db.update(User)
            .set(userToUpdate)
            .where(eq(User.id, id))
            .returning({ updatedUser: {...User} });

        console.log(response)

        // if response array length is 0, user not found
        if (response.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const updatedUser = response[0].updatedUser

        return res.status(200).json({ success: true, message: 'User updated successfully.', updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ success: false, message: "Error updating user", error });
    }
}

export default updateUser;

