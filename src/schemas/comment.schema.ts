import * as  mongoose from 'mongoose'

import { Types } from 'mongoose'

interface Comment {
    name?: string;
    message?: string;
    email?: string;
    createdAt: string;

}


export const CommentSchema = new mongoose.Schema({
    name: String,
    messsage: String,
    email: String,
    createdAt: Date,
}, {
    collection: 'comments'
})