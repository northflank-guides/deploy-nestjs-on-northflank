import { Module } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { DestinationsController } from './destinations.controller';

@Module({
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}
