import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ProductsService} from "./products.service";
import {CreateProductDto} from "./dto/create-product.dto";

@ApiTags('Products')
@Controller('api/products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @ApiOperation({ summary: 'Get all products ' })
    @Get()
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @ApiOperation({ summary: 'Get product by id' })
    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(+id);
    }

    @ApiOperation({ summary: 'Creating product' })
    @ApiResponse({ status: 201 })
    @Post()
    createProduct(@Body() data: CreateProductDto) {
        return this.productsService.createProduct(data);
    }

    @ApiOperation({ summary: 'Updating products' })
    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() data: CreateProductDto) {
        return this.productsService.updateProduct(+id, data);
    }

    @ApiOperation({ summary: 'Deleting products' })
    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(+id);
    }
}
