import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [BasketController],
  providers: [BasketService, PrismaClient],
  imports: [],
  exports: [BasketService],
})
export class BasketModule {}
