"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_models_1 = require("../src/lib/db/models/user_models");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3306;
app.use(express_1.default.json());
app.get("/users", async (req, res) => {
    try {
        const users = await user_models_1.UserModel.query();
        res.json(users);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Ошибка при получении пользователей", error });
    }
});
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await user_models_1.UserModel.query().insert({
            name,
            email,
        });
        res.json(user);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Ошибка при создании пользователя", error });
    }
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map