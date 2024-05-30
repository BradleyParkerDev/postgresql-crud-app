"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../database/schemas/Users"));
const db_1 = require("../../database/db");
const drizzle_orm_1 = require("drizzle-orm");
const auth_1 = require("../../auth");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userLoginData = {
        emailAddress: req.body.emailAddress,
        password: req.body.password
    };
    // Finding user in database
    const foundUser = yield db_1.db.select().from(Users_1.default).where((0, drizzle_orm_1.eq)(Users_1.default.emailAddress, userLoginData.emailAddress));
    console.log(foundUser);
    // If user not found
    if (foundUser.length === 0) {
        return res.status(404).json({ success: false, message: 'Could not find user.' });
    }
    const user = foundUser[0];
    // Validate password
    const passwordValid = yield auth_1.authUtil.validatePassword(userLoginData.password, user.password);
    // If password not valid
    if (!passwordValid) {
        return res.status(401).json({ success: false, message: 'Password was incorrect.' });
    }
    // If password is valid
    res.status(200).json({ message: "User has successfully logged in!", foundUser: user });
});
exports.default = loginUser;
