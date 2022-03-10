import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { VideoRepository } from './internal/core/services/video.repository';
import { VideoService } from './internal/core/services/video.usecase';
import { LoggerMiddleware } from './internal/handlers/logger.middleware';
import { VideoController } from './internal/handlers/http';
import { InMemoryDB } from './internal/repositories/inmemory.db';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [VideoController],
  providers: [VideoService, VideoRepository, InMemoryDB],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
