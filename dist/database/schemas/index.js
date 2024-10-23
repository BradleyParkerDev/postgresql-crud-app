"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("./Users"));
const UserSessions_1 = __importDefault(require("./UserSessions"));
exports.default = {
    User: Users_1.default,
    UserSession: UserSessions_1.default
};
