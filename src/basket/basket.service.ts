import { Injectable } from '@nestjs/common';
import { Basket, PrismaClient } from '@prisma/client';

@Injectable()
export class BasketService {
  constructor(private prisma: PrismaClient) {}

  async createBasket(userId: number): Promise<Basket> {
    return this.prisma.basket.create({
      data: {
        userId,
      },
    });
  }

  async getBasketById(id: number): Promise<Basket | null> {
    return this.prisma.basket.findUnique({
      where: { id },
    });
  }

  async updateBasket(id: number, userId: number): Promise<Basket> {
    return this.prisma.basket.update({
      where: { id },
      data: { userId },
    });
  }

  async deleteBasket(id: number): Promise<Basket> {
    return this.prisma.basket.delete({
      where: { id },
    });
  }
}
