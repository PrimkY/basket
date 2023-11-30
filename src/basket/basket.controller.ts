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
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto, RemoveResponseDto } from './dto/remove-product.dto';

@ApiTags('Basket')
@Controller('api/basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @ApiOperation({ summary: 'Add products to basket' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 201, type: AddProductDto })
  @Post('')
  addProductToBasket(@Body() data: AddProductDto) {
    return this.basketService.addProductToBasket(
      data.basketId,
      data.productId,
      data.quantity,
    );
  }

  @ApiOperation({ summary: 'Get basket by id ' })
  @ApiResponse({ status: 200, type: AddProductDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get(':id')
  getBasket(@Param('id') id: number) {
    return this.basketService.getBasketById(+id);
  }

  @ApiOperation({ summary: 'Update quantity of products in basket' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    description: 'returns status 200 on success',
  })
  @Put('')
  async updateBasket(@Body() data: AddProductDto) {
    await this.basketService.updateBasket(data);
  }

  @ApiOperation({ summary: `Delete pack of products from basket` })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 403,
    description: 'Basket has been deleted',
  })
  @Delete('')
  async deleteBasket(@Body() data: RemoveProductDto) {
    await this.basketService.deleteProductFromBasket(data);
  }
}
