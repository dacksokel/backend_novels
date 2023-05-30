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
const NovelsModels_1 = __importDefault(require("../models/NovelsModels"));
class NovelsControllers {
    test(req, res) {
        res.status(200).json({ status: 'OK' });
    }
    saveNovels(req, res) {
        const novel = req.body;
        console.log(novel);
        res.status(200).json({ status: 'OK' });
    }
    getNovelsPaginated(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 100;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const results = {};
            const count = yield NovelsModels_1.default.countDocuments();
            if (endIndex < count) {
                results.next = {
                    page: page + 1,
                    limit: limit
                };
            }
            if (startIndex > 0) {
                results.previous = {
                    page: page - 1,
                    limit: limit
                };
            }
            try {
                results.results = yield NovelsModels_1.default.find().limit(limit).skip(startIndex).exec();
                res.status(200).json(results);
            }
            catch (e) {
                res.status(500).json({ message: e.message });
            }
        });
    }
}
exports.default = new NovelsControllers;
