import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,) {}
  async create(createUserInput: CreateUserInput) {
    const existingUser = await this.userRepository.findOne({ where: { username: createUserInput.username } });

    if (existingUser) {
      throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
    }
    return await this.userRepository.save(createUserInput);
  }

  async findAll() : Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User>{
    return await this.userRepository.findOne({where: {id}});
  }

  async update(id: number, updateUserInput: UpdateUserInput) : Promise<User> {
    return await this.userRepository.save({id, ...updateUserInput});
  }

  async remove(id: number) : Promise<string> {
    await this.userRepository.delete(id);
    return 'User deleted successfully.'
  }
}
