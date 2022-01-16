import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule as CModule } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheController } from './cache.controller';

console.log(process.env.HOST);

@Module({
  imports: [
    CModule.register({
      store: redisStore,
      host: process.env.HOST,
      port: process.env.PORT,
    }),
  ],
  controllers: [CacheController],
  providers: [CacheService],
})
export class CacheModule {}
