"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose = require("mongoose");
exports.ArticleSchema = new mongoose.Schema({
    content: String,
    title: String,
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    banner: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload_file' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    views: { type: mongoose.Schema.Types.Number },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
//# sourceMappingURL=article.schema.js.map