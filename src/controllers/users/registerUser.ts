import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { db } from '../../database/db';

const registerUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    console.log(newUser);
    try {
        await db.insert(User).values(newUser);
        res.status(200).json({ success: true });
    
    } catch (error) {
        console.error("Error registering new user:", error);
        res.status(500).send({ message: "Error registering new user.", error });
    }
}

export default registerUser;
