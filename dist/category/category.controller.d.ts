import { Article } from 'src/schemas/article.schema';
import { Category } from './../schemas/category.schema';
import { Model } from 'mongoose';
export declare class CategoryController {
    private categoryModel;
    private articleModel;
    constructor(categoryModel: Model<Category>, articleModel: Model<Article>);
    root(): Promise<Array<Category>>;
}
