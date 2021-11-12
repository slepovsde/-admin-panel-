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
const Event_1 = __importDefault(require("./Event"));
const FileService_1 = __importDefault(require("./FileService"));
class EventController {
    create(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fileName = yield FileService_1.default.saveFile((_a = req.files) === null || _a === void 0 ? void 0 : _a.image);
                const { title, description, date, tickets } = req.body;
                const event = yield Event_1.default.create({
                    title,
                    description,
                    date,
                    tickets,
                    image: fileName,
                });
                res.json(event);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield Event_1.default.find();
                return res.json(events);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: 'Id not specified' });
                }
                const event = yield Event_1.default.findById(id);
                return res.json(event);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = req.body;
                if (!event._id) {
                    res.status(400).json({ message: 'Id not specified' });
                }
                const updatedEvent = yield Event_1.default.findByIdAndUpdate(event._id, event, {
                    new: true,
                });
                return res.json(updatedEvent);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: 'Id not specified' });
                }
                const event = yield Event_1.default.findByIdAndDelete(id);
                return res.json(event);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = new EventController();
//# sourceMappingURL=EventController.js.map