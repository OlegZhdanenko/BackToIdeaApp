import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import { UserModel } from "./lib/db/models/user_models.ts";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.query();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ошибка при получении пользователей", error });
  }
});
app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await UserModel.query().insert({
      name,
      email,
    });
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ошибка при создании пользователя", error });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
