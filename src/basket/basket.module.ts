import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { PrismaClient } from '@prisma/client';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [BasketController],
  providers: [BasketService, PrismaClient],
  imports: [ProductsModule],
  exports: [BasketService],
})
export class BasketModule {}
