import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from '@prisma/client';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {UsersService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @ApiOperation({ summary: 'Creating user' })
    @ApiResponse({ status: 201})
    @Post()
    async createUser(@Body() data: CreateUserDto): Promise<User> {
        return this.usersService.createUser(data);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200})
    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @ApiOperation({ summary: 'Method to get one user by id' })
    @ApiResponse({ status: 200})
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User | null> {
        return this.usersService.getUserById(+id);
    }

    @ApiOperation({ summary: 'update user by id' })
    @ApiResponse({ status: 200 })
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: CreateUserDto): Promise<User> {
        return this.usersService.updateUser(+id, data);
    }

    @ApiOperation({ summary: 'delete user by id' })
    @ApiResponse({ status: 200 })
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return this.usersService.deleteUser(+id);
    }
}