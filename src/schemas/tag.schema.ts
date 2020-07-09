import { Document,Types } from "mongoose";
import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema()
export class Tag extends Document {
    @Prop()
    content : string;
    @Prop()
    id : Types.ObjectId
}



export  const TagSchema = SchemaFactory.createForClass(Tag)

