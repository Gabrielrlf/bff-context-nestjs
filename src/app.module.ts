import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiRickmortyModule } from './api-rickmorty/api-rickmorty.module';

@Module({
  imports: [ApiRickmortyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
