import { Category } from './category.schema';
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
export interface Article extends Document {
    content?: string;
    title?: string;
    id: string;
    views: number;
    category: Category;
}
export declare const ArticleSchema: mongoose.Schema<any>;
