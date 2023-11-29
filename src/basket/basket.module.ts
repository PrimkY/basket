import { Module } from '@nestjs/common';
import {BasketController} from "./basket.controller";
import {BasketService} from "./basket.service";
import {PrismaService} from "../prisma.service";

@Module({
    controllers: [BasketController],
    providers: [BasketService, PrismaService],
    imports: [],
    exports: [BasketService],
})
export class BasketModule {}
