
import { Get, Controller, Render,Req } from '@nestjs/common';
import { Request } from 'express';
@Controller()
export class AppController {
  @Get('/')  
  root(@Req() request : Request) {
    return "Hello world";
  }
}