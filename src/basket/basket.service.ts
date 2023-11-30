import { Injectable } from '@nestjs/common';
import { Basket, PrismaClient } from '@prisma/client';
import { ProductsService } from '../products/products.service';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@Injectable()
export class BasketService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly productService: ProductsService,
  ) {}

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
      include: { products: true },
    });
  }

  async addProductToBasket(basketId, productId, quantity) {
    return await this.prisma.productInBasket.create({
      data: {
        basketId,
        productId,
        quantity,
      },
    });
  }

  async updateBasket(data: AddProductDto) {
    const basketId = data.basketId;
    const productId = data.productId;
    const quantity = data.quantity;
    return await this.prisma.productInBasket.updateMany({
      where: {
        basketId,
        productId,
      },
      data: {
        quantity: quantity,
      },
    });
  }

  async deleteProductFromBasket(data: RemoveProductDto) {
    const basketId = data.basketId;
    const productId = data.productId;
    return this.prisma.productInBasket.deleteMany({
      where: { basketId, productId },
    });
  }
}
