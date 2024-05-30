import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { db } from '../../database/db';
import { authUtil } from '../../auth';

const registerUser = async (req: Request, res: Response) => {
    const saltRounds = 5;
    const passwordHash = await authUtil.generatePasswordHash(req.body.password, saltRounds)


    try {

        // Creating new user data
        const newUserData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            emailAddress: req.body.emailAddress,
            password: passwordHash
        }; 

        await db.insert(User).values(newUserData);
        res.status(200).json({ success: true });
    
    } catch (error) {
        console.error("Error registering new user:", error);
        res.status(500).send({ message: "Error registering new user.", error });
    }
}

export default registerUser;
