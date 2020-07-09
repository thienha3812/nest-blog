import { ImageSchema } from './../schemas/image.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, Global } from '@nestjs/common';
import { ArticleSchema } from 'src/schemas/article.schema';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TagSchema } from 'src/schemas/tag.schema';
import { CategorySchema } from 'src/schemas/category.schema';
import { CommentSchema } from 'src/schemas/comment.schema';

@Global()
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }, { name: "Article", schema: ArticleSchema }, { name: 'Tag', schema: TagSchema }, { name: 'Upload_file', schema: ImageSchema }, { name: 'Category', schema: CategorySchema }])],
    controllers: [ArticleController],
    providers: [ArticleService]
})
export class ArticleModule { }
