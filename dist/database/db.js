"use strict";
///////////////////////////////////////////////////////////////////////
// Local Connection
///////////////////////////////////////////////////////////////////////
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// Pool Connection
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const schema = __importStar(require("./schemas"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const connectionString = process.env.LOCAL_DATABASE_URL;
if (!connectionString) {
    throw new Error('Environment variable for database is not defined');
}
const pool = new pg_1.Pool({ connectionString: connectionString });
exports.db = (0, node_postgres_1.drizzle)(pool, { schema, logger: true });
///////////////////////////////////////////////////////////////////////
// Neon Connection
///////////////////////////////////////////////////////////////////////
// Pool Connection
// import { Pool, neonConfig } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// import ws from 'ws';
// neonConfig.webSocketConstructor = ws;  // <-- this is the key bit
// import * as schema from './schemas';
// import dotenv from 'dotenv';
// // Load environment variables from .env file
// dotenv.config();
// const connectionString = process.env.NEON_POOL_DATABASE_URL as string;
// if (!connectionString) {
//   throw new Error('Environment variable for database is not defined');
// }
// const pool = new Pool({ connectionString: connectionString });
// export const db = drizzle(pool, { schema, logger: true });
// HTTP Connection
// import { drizzle } from 'drizzle-orm/neon-http';
// import { neon } from '@neondatabase/serverless';
// import * as schema from './schemas';
// import dotenv from 'dotenv';
// // Load environment variables from .env file
// dotenv.config();
// const connectionString = process.env.NEON_HTTP_DATABASE_URL as string;
// if (!connectionString) {
//   throw new Error('Environment variable for database is not defined');
// }
// const sql = neon(connectionString!);
// export const db = drizzle(sql, {schema, logger: true});
