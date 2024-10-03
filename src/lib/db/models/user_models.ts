import Objection, { Model, RelationMappings } from "objection";
import { IdeaModel } from "./idea_models";

export class UserModel extends Model {
  _id: string;
  name: string;
  email: string;
  password: string;
  created_at: Objection.FunctionBuilder;
  updated_at: Objection.FunctionBuilder;

  static tableName = "users";

  static relationMappings: RelationMappings = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: IdeaModel,
      join: {
        from: "users.id",
        to: "ideas._id",
      },
    },
  };
}
