import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CacheModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
