"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const objection_1 = require("objection");
const idea_models_1 = require("../models/idea_models");
class UserModel extends objection_1.Model {
}
exports.UserModel = UserModel;
UserModel.tableName = "users";
UserModel.relationMappings = {
    posts: {
        relation: objection_1.Model.HasManyRelation,
        modelClass: idea_models_1.IdeaModel,
        join: {
            from: "users.id",
            to: "ideas._id",
        },
    },
};
//# sourceMappingURL=user_models.js.map