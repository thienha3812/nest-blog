import { Document } from "mongoose";
export declare class Category extends Document {
    content?: string;
    count_article?: number;
}
declare const CategorySchema: import("mongoose").Schema<any>;
export { CategorySchema, };
