import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@ApiTags('Basket')
@Controller('api/basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @ApiOperation({ summary: 'Add products to basket' })
  @Post('')
  async addProductToBasket(@Body() data: AddProductDto) {
    return this.basketService.addProductToBasket(
      data.basketId,
      data.productId,
      data.quantity,
    );
  }

  @ApiOperation({ summary: 'Get basket by id ' })
  @Get(':id')
  async getBasket(@Param('id') id: number) {
    return this.basketService.getBasketById(+id);
  }

  @ApiOperation({ summary: 'Update quantity of products in basket' })
  @Put('')
  async updateBasket(@Body() data: AddProductDto) {
    return this.basketService.updateBasket(data);
  }

  @ApiOperation({ summary: `Delete pack of products from basket` })
  @Delete('')
  async deleteBasket(@Body() data: RemoveProductDto) {
    return this.basketService.deleteProductFromBasket(data);
  }
}
