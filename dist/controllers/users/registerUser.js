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
const auth_1 = require("../../auth");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 5;
    const passwordHash = yield auth_1.authUtil.generatePasswordHash(req.body.password, saltRounds);
    try {
        // Creating new user data
        const newUserData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            emailAddress: req.body.emailAddress,
            password: passwordHash
        };
        yield db_1.db.insert(Users_1.default).values(newUserData);
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.error("Error registering new user:", error);
        res.status(500).send({ message: "Error registering new user.", error });
    }
});
exports.default = registerUser;
