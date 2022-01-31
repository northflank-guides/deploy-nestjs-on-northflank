import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Destination } from './entities/destination.entity';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destination)
    private destinationsRepository: Repository<Destination>,
  ) {}

  create(createDestinationDto: CreateDestinationDto) {
    return this.destinationsRepository.save(createDestinationDto);
  }

  findAll() {
    return this.destinationsRepository.find();
  }

  findOne(id: number) {
    return this.destinationsRepository.findOne(id);
  }

  update(id: number, updateDestinationDto: UpdateDestinationDto) {
    return this.destinationsRepository.update(id, updateDestinationDto);
  }

  remove(id: number) {
    return this.destinationsRepository.delete(id);
  }
}
