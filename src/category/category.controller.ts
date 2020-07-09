import { Article } from 'src/schemas/article.schema';
import { Category } from './../schemas/category.schema';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Controller('category')
export class CategoryController {
    constructor(@InjectModel('Category') private categoryModel : Model<Category> ,@InjectModel('Article') private articleModel : Model<Article>){}
    @Get()
    async root () : Promise<Array<Category>> {
        const categories = await this.categoryModel.find().exec() 
        for(let i in categories){
            const articles =  await this.articleModel.find({category : categories[i]._id  })             
            categories[i].set('count_article',articles.length)
        }

        return categories
    }
}
