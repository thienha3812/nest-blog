import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from 'src/schemas/tag.schema';

@Controller('tag')
export class TagController {
    constructor(@InjectModel('Tag') private tagModel : Model<Tag>){}
    @Get()    
    async root () {
        const tags = await this.tagModel.find().select("content").exec()
        return tags
    }
}
