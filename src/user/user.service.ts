// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getUserById(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  updateUser(userId: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where: { id: userId }, data });
  }

  deleteUser(userId: number) {
    return this.prisma.user.delete({ where: { id: userId } });
  }
}
