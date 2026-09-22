import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import hubspotConfig from './config/hubspot.config';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { WebhooksController } from './webhooks/webhooks.controller';

import { HubSpotClient } from './hubspot/hubspot.client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [hubspotConfig],
    }),
  ],
  controllers: [AppController, WebhooksController],
  providers: [AppService, HubSpotClient],
})
export class AppModule {}