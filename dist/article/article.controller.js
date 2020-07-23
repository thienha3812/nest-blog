"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const mongoose_1 = require("mongoose");
const article_schema_1 = require("../schemas/article.schema");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_3 = require("mongoose");
const article_dto_1 = require("./dto/article.dto");
const _ = require("lodash");
let ArticleController = class ArticleController {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async findAll(query, index) {
        const articles = await this.articleModel.find({ published: true }).populate('banner', 'url').sort({ id: -1 }).populate('category', 'content').populate('tags', 'content').populate('comments').exec();
        return { articles: articles.slice(query.index, query.index + 6).reverse(), number_page: Math.ceil(articles.length / 6) };
    }
    ;
    async findById(params) {
        const article = await this.articleModel.findOne({ _id: mongoose_1.Types.ObjectId(params.id) }).populate('tags', 'content').populate('comments').exec();
        article.views = article.views + 1;
        await article.save();
        return article;
    }
    ;
    async findByType(query) {
        const { type, index } = query;
        const articles = await this.articleModel.find({ published: true }).populate('banner', 'url').populate('category', 'content').populate('tags', 'content').populate('comments').exec();
        let number_page = 0;
        switch (type) {
            case 1:
                number_page = Math.ceil(articles.filter(x => _.get(x, 'category.content') === 'Lập trình').length / 4);
                return { articles: articles.filter(x => _.get(x, 'category.content') === 'Lập trình').slice(index, index + 4).reverse(), number_page };
            case 2:
                number_page = Math.ceil(articles.filter(x => _.get(x, 'category.content') === 'Công nghệ').length / 4);
                return { articles: articles.filter(x => _.get(x, 'category.content') === 'Công nghệ').slice(index, index + 4).reverse(), number_page };
            case 3:
                number_page = Math.ceil(articles.filter(x => _.get(x, 'category.content') === 'Chuyện bên lề').length / 4);
                return { articles: articles.filter(x => _.get(x, 'category.content') === 'Chuyện bên lề').slice(index, index + 4).reverse(), number_page };
        }
    }
    async findPopular() {
        const articles = await this.articleModel.find({ published: true }).sort({ views: -1 }).limit(3).populate('banner', 'url').populate('category', 'content', {}).populate('tags', 'content').populate('comments').exec();
        return articles;
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, common_1.Query('index', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto, Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAll", null);
__decorate([
    common_1.Get('/id/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findById", null);
__decorate([
    common_1.Get('/type'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findByType", null);
__decorate([
    common_1.Get('/popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findPopular", null);
ArticleController = __decorate([
    common_1.Controller('article'),
    __param(0, mongoose_2.InjectModel('Article')),
    __metadata("design:paramtypes", [mongoose_3.Model])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map