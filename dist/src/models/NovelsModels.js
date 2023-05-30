"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Novels = void 0;
const mongoose_1 = require("mongoose");
const mongoose_util_1 = require("../utils/mongoose-util");
const chapterSchema = new mongoose_1.Schema({
    novelName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    chapter: {
        type: String,
        required: true
    }
}, { timestamps: true });
const model = (0, mongoose_util_1.createModel)('Novels', chapterSchema);
exports.Novels = model;
exports.default = model;
