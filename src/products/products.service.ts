// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaClient) {}

    async getAllProducts() {
        return this.prisma.product.findMany();
    }

    async getProductById(id: number) {
        return this.prisma.product.findUnique({
            where: { id },
        });
    }

    async createProduct(data: { name: string; price: number; description: string }) {
        return this.prisma.product.create({
            data,
        });
    }

    async updateProduct(id: number, data: { name?: string; price?: number; description?: string }) {
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }

    async deleteProduct(id: number) {
        return this.prisma.product.delete({
            where: { id },
        });
    }
}
