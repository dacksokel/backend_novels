"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function createModel(schemaName, schema) {
    let model = mongoose_1.default.connection.models[schemaName];
    if (!model) {
        model = mongoose_1.default.model(schemaName, schema);
    }
    return model;
}
exports.createModel = createModel;
