
import { Tag } from './tag.schema';
import { Document, Schema } from "mongoose";
import { Prop, SchemaFactory, raw } from '@nestjs/mongoose';



export class Image extends Document {
    @Prop()
    name: string;
    @Prop()
    url: string;
}



export const ImageSchema = new Schema({
    url: String
}, {
    collection: 'upload_file'
})