"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NovelsControllers_1 = __importDefault(require("../../controllers/NovelsControllers"));
const router = express_1.default.Router({});
router.get('/', NovelsControllers_1.default.test.bind(NovelsControllers_1.default));
router.get('/getPaginated', NovelsControllers_1.default.getNovelsPaginated.bind(NovelsControllers_1.default));
exports.default = router;
