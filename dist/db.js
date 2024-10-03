"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexInstance = exports.connectingDb = void 0;
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const { development } = require("./knexfile");
const connectingDb = () => {
    const db = (0, knex_1.default)(development);
    objection_1.Model.knex(db);
};
exports.connectingDb = connectingDb;
exports.knexInstance = (0, knex_1.default)(development);
//# sourceMappingURL=db.js.map