import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any = [
    {
      id: 1,
      name: 'root',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'admin',
      phone: '123456789',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);

    return {
      id: this.users.length + 1,
      ...user,
    };
  }
}
