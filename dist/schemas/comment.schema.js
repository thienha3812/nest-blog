"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const mongoose = require("mongoose");
exports.CommentSchema = new mongoose.Schema({
    name: String,
    messsage: String,
    email: String,
    createdAt: Date,
}, {
    collection: 'comments'
});
//# sourceMappingURL=comment.schema.js.map