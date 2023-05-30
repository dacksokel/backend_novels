"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config/config"));
const db_1 = require("./db/db");
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
const port = config_1.default.port;
(0, db_1.connectDB)();
app.use('/api', routers_1.default);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
