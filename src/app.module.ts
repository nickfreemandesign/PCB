import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PCBService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [PCBService],
})
export class AppModule {}
