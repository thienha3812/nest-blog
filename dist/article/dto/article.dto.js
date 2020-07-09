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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleDto = void 0;
const class_transformer_1 = require("class-transformer");
class ArticleDto {
    constructor() {
        this.category = '';
    }
}
__decorate([
    class_transformer_1.Transform(index => parseInt(index)),
    __metadata("design:type", Number)
], ArticleDto.prototype, "index", void 0);
__decorate([
    class_transformer_1.Transform(type => parseInt(type)),
    __metadata("design:type", Number)
], ArticleDto.prototype, "type", void 0);
exports.ArticleDto = ArticleDto;
//# sourceMappingURL=article.dto.js.map