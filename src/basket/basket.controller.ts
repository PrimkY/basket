import { Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { BasketService } from './basket.service';
import {ApiOperation, ApiTags} from '@nestjs/swagger';

@ApiTags('Basket')
@Controller('api/basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @ApiOperation({ summary: 'Create basket' })
  @Post(':userId')
  async createBasket(@Param('userId') userId: number) {
    return this.basketService.createBasket(+userId);
  }

  @ApiOperation({ summary: 'Get basket by id ' })
  @Get(':id')
  async getBasket(@Param('id') id: number) {
    return this.basketService.getBasketById(+id);
  }

  @ApiOperation({ summary: 'Update basket' })
  @Put(':id/:userId')
  async updateBasket(@Param('id') id: number, @Param('userId') userId: number) {
    return this.basketService.updateBasket(+id, +userId);
  }

  @ApiOperation({ summary: 'Delete basket' })
  @Delete(':id')
  async deleteBasket(@Param('id') id: number) {
    return this.basketService.deleteBasket(+id);
  }
}
