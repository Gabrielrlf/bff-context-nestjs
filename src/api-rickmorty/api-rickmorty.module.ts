import { Module } from '@nestjs/common';
import { ApiRickmortServiceService } from './api-rickmort-service/api-rickmort-service.service';
import { ApiRickmortyControllerController } from './api-rickmorty-controller/api-rickmorty-controller.controller';

@Module({
  providers: [ApiRickmortServiceService],
  controllers: [ApiRickmortyControllerController]
})
export class ApiRickmortyModule {}
