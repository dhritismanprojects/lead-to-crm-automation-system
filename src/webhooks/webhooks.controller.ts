import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';

@Controller('webhooks')
export class WebhooksController {
  @Post('leads')
  @HttpCode(201)
  receiveLead(@Body() body: any) {
    console.log('Received lead:', body);

    if (!body.email) {
      throw new BadRequestException('Email is required');
    }

    return {
      success: true,
      message: 'Lead received successfully',
    };
  }
}