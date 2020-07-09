import { Model } from 'mongoose';
import { Tag } from 'src/schemas/tag.schema';
export declare class TagController {
    private tagModel;
    constructor(tagModel: Model<Tag>);
    root(): Promise<Tag[]>;
}
