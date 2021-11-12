"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EventController_1 = __importDefault(require("./EventController"));
const router = (0, express_1.Router)();
router.post('/events', EventController_1.default.create);
router.get('/events', EventController_1.default.getAll);
router.get('/events/:id', EventController_1.default.getOne);
router.put('/events', EventController_1.default.update);
router.delete('/events/:id', EventController_1.default.delete);
exports.default = router;
//# sourceMappingURL=router.js.map