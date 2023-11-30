import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from '@prisma/client';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BasketService } from '../basket/basket.service';
import { CreateProductDto } from '../products/dto/create-product.dto';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly basketService: BasketService,
  ) {}

  @ApiOperation({ summary: 'Creating user' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 201, type: CreateUserDto })
  @Post()
  async createUser(@Body() data: CreateUserDto) {
    const response = this.usersService.createUser(data);
    const newUserId = response.then((data) => data.id);
    await this.basketService.createBasket(await newUserId);
    return response;
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 200, type: [CreateUserDto] })
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 201, type: CreateUserDto })
  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.getUserById(+id);
  }

  @ApiOperation({ summary: 'update user by id' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    description: 'returns status 200 on success',
  })
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: CreateUserDto) {
    return this.usersService.updateUser(+id, data);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({
    status: 200,
    description: 'returns status 200 on success',
  })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
