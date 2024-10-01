import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import { UserModel } from "./app/models/user_models";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3306;
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
