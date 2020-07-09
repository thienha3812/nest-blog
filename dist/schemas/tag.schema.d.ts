import { Document, Types } from "mongoose";
export declare class Tag extends Document {
    content: string;
    id: Types.ObjectId;
}
export declare const TagSchema: import("mongoose").Schema<any>;
