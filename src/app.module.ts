import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/blog'), ArticleModule, TagModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
