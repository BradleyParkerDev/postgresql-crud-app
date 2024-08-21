import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { eq } from 'drizzle-orm';
import { db } from '../../database/db';

const deleteUser = async (req: Request, res: Response) => {


    try {

        
        // Ensure req.decoded is set by the authorizeUser middleware
        const id = req.decoded?.userData?.userId;

        if (!id) {
            return res.status(400).json({ message: "User ID is missing from request" });
        }

        // returns an array
        const response  = await db.delete(User).where(eq(User.id, id)).returning();

        // if response is greater than 0 the user has been deleted
        if(response.length > 0){
            res.json({message:'User successfully deleted!', response: response[0]})        

        }else{
            res.json({message:'User not deleted!'})        

        }

    } catch (error) {
        res.json({message:'Error deleting user!', error: error})        

    }
}

export default deleteUser;