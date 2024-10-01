import Objection, { Model } from "objection";

export class IdeaModel extends Model {
  idea_id: string;
  theme: string;
  description!: string;
  created_at: Objection.FunctionBuilder;
  updated_at: Objection.FunctionBuilder;
  static tableName = "ideas";
}
