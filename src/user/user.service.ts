// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async updateUser(
    userId: number,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prisma.user.update({ where: { id: userId }, data });
  }

  async deleteUser(userId: number): Promise<User> {
    return this.prisma.user.delete({ where: { id: userId } });
  }
}
