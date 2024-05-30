import { Request, Response } from "express";
import User from "../../database/schemas/Users";
import { db } from "../../database/db";
import { eq } from "drizzle-orm";
import { authUtil } from "../../auth";

const loginUser = async (req: Request, res: Response) => {
    const userLoginData = {
        emailAddress: req.body.emailAddress,
        password: req.body.password
    };

    // Finding user in database
    const foundUser = await db.select().from(User).where(eq(User.emailAddress, userLoginData.emailAddress));
    console.log(foundUser);

    // If user not found
    if (foundUser.length === 0) {
        return res.status(404).json({ success: false, message: 'Could not find user.' });
    }

    const user = foundUser[0];

    // Validate password
    const passwordValid = await authUtil.validatePassword(userLoginData.password, user.password);

    // If password not valid
    if (!passwordValid) {
        return res.status(401).json({ success: false, message: 'Password was incorrect.' });
    }

    // If password is valid
    res.status(200).json({ message: "User has successfully logged in!", foundUser: user });
};

export default loginUser;
