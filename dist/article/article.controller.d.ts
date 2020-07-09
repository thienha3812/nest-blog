import { Article } from 'src/schemas/article.schema';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
export declare class ArticleController {
    private articleModel;
    constructor(articleModel: Model<Article>);
    findAll(query: ArticleDto, index: number): Promise<any>;
    findById(params: ArticleDto): Promise<Article>;
    findByType(query: ArticleDto): Promise<{
        articles: Article[];
        number_page: number;
    }>;
    findPopular(): Promise<Article[]>;
}
