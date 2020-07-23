import { Types } from 'mongoose';
import { Article } from 'src/schemas/article.schema';
import { Get, Session, Inject, Param, Query, ParseIntPipe, Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { match } from 'assert';
import * as _ from 'lodash';

@Controller('article')
export class ArticleController {
    constructor(@InjectModel('Article') private articleModel: Model<Article>) { }
    @Get()
    async findAll(@Query() query: ArticleDto, @Query('index', ParseIntPipe) index: number): Promise<any> {

        const articles = await this.articleModel.find({ published: true }).populate('banner', 'url').sort({id : -1}).populate('category', 'content').populate('tags', 'content').populate('comments').exec()
        return { articles: articles.slice(query.index, query.index + 6).reverse(), number_page: Math.ceil(articles.length / 6) }
    };
    @Get('/id/:id')
    async findById(@Param() params: ArticleDto) {
        const article = await this.articleModel.findOne({ _id: Types.ObjectId(params.id) }).populate('tags', 'content').populate('comments').exec()
        article.views = article.views + 1
        await article.save()
        return article
    };
    @Get('/type')
    async findByType(@Query() query: ArticleDto) {
        /// 1 == 'Lập trình' 
        /// 2 == 'Công nghệ'
        /// 3 == 'Chuyện bên lề'       
        const { type ,index} = query
        const articles = await this.articleModel.find({ published: true }).populate('banner', 'url').populate('category', 'content').populate('tags', 'content').populate('comments').exec()
        let number_page: number = 0;
        switch (type) {
            case 1:
                number_page = Math.ceil(articles.filter(x => _.get(x, 'category.content') === 'Lập trình').length/4)
                return { articles: articles.filter(x => _.get(x, 'category.content') === 'Lập trình').slice(index,index + 4).reverse(), number_page }
            case 2:
                number_page = Math.ceil(articles.filter(x => _.get(x, 'category.content') === 'Công nghệ').length/4)
                return { articles: articles.filter(x => _.get(x, 'category.content') === 'Công nghệ').slice(index,index + 4).reverse(), number_page }
            case 3:
                number_page = Math.ceil(articles.filter(x => _.get(x, 'category.content') === 'Chuyện bên lề').length/4)
                return { articles: articles.filter(x => _.get(x, 'category.content') === 'Chuyện bên lề').slice(index,index + 4).reverse(), number_page }
        }

    }
    @Get('/popular')
    async findPopular() {
        const articles = await this.articleModel.find({ published: true }).sort({ views: -1 }).limit(3).populate('banner', 'url').populate('category', 'content', {}).populate('tags', 'content').populate('comments').exec()
        return articles
    }
}


