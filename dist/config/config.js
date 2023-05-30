"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `./config/env/${process.env.NODE_ENV}.env` });
console.log(`Mode: ${process.env.NODE_ENV}`);
const config = {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000'),
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/novelas',
    },
};
exports.default = config;
