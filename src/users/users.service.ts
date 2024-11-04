import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({email});
  }
}
