import { Category } from './category.schema';
import { Tag } from './tag.schema';
import { Document } from "mongoose";
import * as  mongoose from 'mongoose'


export interface Article extends Document {
    content?: string;
    title?: string;
    id: string;
    views: number;
    category : Category;
}

export const ArticleSchema = new mongoose.Schema({
    content: String,
    title: String,
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    banner: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload_file' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    views: { type: mongoose.Schema.Types.Number },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

