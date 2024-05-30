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
Object.defineProperty(exports, "__esModule", { value: true });
const migrator_1 = require("drizzle-orm/neon-http/migrator");
const db_1 = require("./db");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // This will run migrations on the database, skipping the ones already applied
    return yield (0, migrator_1.migrate)(db_1.db, { migrationsFolder: './src/database/migrations' });
});
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
