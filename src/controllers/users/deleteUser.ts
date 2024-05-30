import { Request, Response } from 'express';
import User from '../../database/schemas/Users';
import { db } from '../../database/db';
import { eq } from 'drizzle-orm';

const deleteUser = async (req: Request, res: Response) => {

    const id:string = req.body.id

    try {
        const response  = await db.delete(User).where(eq(User.id, id)).returning();
        res.json({message:'User successfully deleted!', response: response})        

    } catch (error) {
        res.json({message:'Error deleting user!', error: error})        

    }
}

export default deleteUser;