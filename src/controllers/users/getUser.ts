import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { eq } from 'drizzle-orm';
import { db } from '../../database/db';


const getUser = async (req: Request, res: Response) => {

    try {

        // Ensure req.decoded is set by the authorizeUser middleware
        const id = req.decoded?.userData?.userId;

        if (!id) {
            return res.status(400).json({ message: "User ID is missing from request" });
        }

        const foundUserArr = await db.select().from(User).where(eq(User.id, id));

        if (foundUserArr.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // 
        const foundUser = {
            userImage: foundUserArr[0].userImage ,
            firstName: foundUserArr[0].firstName ,
            lastName: foundUserArr[0].lastName ,
            emailAddress: foundUserArr[0].emailAddress ,
            userName: foundUserArr[0].userName,
            lastUpdated: foundUserArr[0].lastUpdated            
        }

        res.status(200).json({ success: true, user: foundUser });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ success: false, message: "Error fetching user", error });
    }
}

export default getUser;
