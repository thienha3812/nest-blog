"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const image_schema_1 = require("./../schemas/image.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const article_schema_1 = require("../schemas/article.schema");
const article_controller_1 = require("./article.controller");
const article_service_1 = require("./article.service");
const tag_schema_1 = require("../schemas/tag.schema");
const category_schema_1 = require("../schemas/category.schema");
const comment_schema_1 = require("../schemas/comment.schema");
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Comment', schema: comment_schema_1.CommentSchema }, { name: "Article", schema: article_schema_1.ArticleSchema }, { name: 'Tag', schema: tag_schema_1.TagSchema }, { name: 'Upload_file', schema: image_schema_1.ImageSchema }, { name: 'Category', schema: category_schema_1.CategorySchema }])],
        controllers: [article_controller_1.ArticleController],
        providers: [article_service_1.ArticleService]
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map