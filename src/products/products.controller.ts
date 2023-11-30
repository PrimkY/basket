import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Products')
@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get all products ' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    type: [CreateProductDto],
  })
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    type: CreateProductDto,
  })
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(+id);
  }

  @ApiOperation({ summary: 'Creating product' })
  @ApiResponse({ status: 201, type: CreateProductDto })
  @Post()
  createProduct(@Body() data: CreateProductDto) {
    return this.productsService.createProduct(data);
  }

  @ApiOperation({ summary: 'Updating products' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    description: 'returns status 200 on success',
  })
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() data: CreateProductDto) {
    return this.productsService.updateProduct(+id, data);
  }

  @ApiOperation({ summary: 'Deleting products' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    description: 'returns status 200 on success',
  })
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(+id);
  }
}
