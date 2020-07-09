import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagSchema } from 'src/schemas/tag.schema';

@Module({
  imports: [MongooseModule.forFeature([ { name: 'Tag', schema: TagSchema }])],
  controllers: [TagController]
})
export class TagModule {}
