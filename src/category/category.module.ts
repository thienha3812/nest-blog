import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategorySchema } from 'src/schemas/category.schema';
import { ArticleSchema } from 'src/schemas/article.schema';

@Module({
  imports: [MongooseModule.forFeature([{name : 'Category',schema: CategorySchema},{name : 'Article',schema:ArticleSchema}])],
  controllers: [CategoryController]
})
export class CategoryModule {}
