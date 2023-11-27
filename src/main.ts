import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT') || 3001;
  const config = new DocumentBuilder()
      .setTitle('Docs for test.api')
      .setDescription('This is description for all methods that available in this app' )
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(PORT, () => console.log(`[nest main] -> server started on http://localhost:${PORT}`));
  console.log(`[nest main] -> swagger started on http://localhost:${PORT}/api/docs`)
}
bootstrap();
