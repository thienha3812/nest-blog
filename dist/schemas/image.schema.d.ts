import { Document, Schema } from "mongoose";
export declare class Image extends Document {
    name: string;
    url: string;
}
export declare const ImageSchema: Schema<any>;
