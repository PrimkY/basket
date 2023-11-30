// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaClient) {}

  getAllProducts() {
    return this.prisma.product.findMany();
  }

  getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  createProduct(data: { name: string; price: number; description: string }) {
    return this.prisma.product.create({
      data,
    });
  }

  updateProduct(
    id: number,
    data: { name?: string; price?: number; description?: string },
  ) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
