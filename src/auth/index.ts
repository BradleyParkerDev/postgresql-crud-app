// accessToken
import generateToken from "./token/generateToken";

// hashing
import generatePasswordHash from "./hashing/generatePasswordHash";

//  middleware
import authorizeUser from "./middleware/authorizeUser";


// validation
import validatePassword from "./validation/validatePassword";



export const authUtil =  {

    // accessToken
    generateToken,

    // hashing
    generatePasswordHash,

    // middleware
    authorizeUser,

    // validation
    validatePassword

}