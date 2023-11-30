import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { BasketModule } from '../basket/basket.module';

@Module({})
@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClient],
  imports: [BasketModule],
  exports: [UsersService],
})
export class UsersModule {}
