import { Module } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
import {UsersController} from "./user.controller";
import {UsersService} from "./user.service";

@Module({})
@Module({
    controllers: [UsersController],
    providers: [UsersService, PrismaClient],
    imports: [],
    exports: [UsersService],
})
export class UserModule {}
