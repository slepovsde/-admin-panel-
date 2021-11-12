"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Event = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    tickets: { type: Number, required: true },
    image: { type: String }
});
exports.default = mongoose_1.default.model('Event', Event);
//# sourceMappingURL=Event.js.map