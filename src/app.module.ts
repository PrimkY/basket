import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {ProductsModule} from "./products/products.module";
import { BasketController } from './basket/basket.controller';
import { BasketService } from './basket/basket.service';
import { BasketModule } from './basket/basket.module';
import { UsersController } from './user/user.controller';
import { UsersService } from './user/user.service';
import { UserModule } from './user/user.module';
import {PrismaService} from "./prisma.service";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true
      }),
      ProductsModule,
      BasketModule,
      UserModule
  ],
  controllers: [AppController, BasketController, UsersController],
  providers: [AppService, BasketService, UsersService],
})
export class AppModule {}
