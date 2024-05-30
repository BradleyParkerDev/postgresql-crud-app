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
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    try {
        const response = yield db_1.db.delete(Users_1.default).where((0, drizzle_orm_1.eq)(Users_1.default.id, id)).returning();
        res.json({ message: 'User successfully deleted!', response: response });
    }
    catch (error) {
        res.json({ message: 'Error deleting user!', error: error });
    }
});
exports.default = deleteUser;
