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
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdates = req.body;
    console.log(userUpdates);
    try {
        const response = yield db_1.db.update(Users_1.default)
            .set(userUpdates)
            .where((0, drizzle_orm_1.eq)(Users_1.default.id, userUpdates.id))
            .returning({ updatedUser: Object.assign({}, Users_1.default) });
        console.log(response);
        if (response.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, message: 'User updated successfully.', response });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ success: false, message: "Error updating user", error });
    }
});
exports.default = updateUser;
