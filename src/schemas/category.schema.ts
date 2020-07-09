import { Article } from 'src/schemas/article.schema';
import { Document, Types, Model,model } from "mongoose";
import { Prop, Schema, SchemaFactory, InjectModel } from '@nestjs/mongoose';
import { ArticleSchema } from "./article.schema";



@Schema()
export class Category extends Document {        
    @Prop()
    content?: string;    
    @Prop()    
    count_article?  : number
}



const CategorySchema = SchemaFactory.createForClass(Category)
export {
    CategorySchema,
}

