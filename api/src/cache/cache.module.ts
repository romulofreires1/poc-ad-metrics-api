import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule as CModule } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheController } from './cache.controller';

@Module({
  imports: [
    CModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [CacheController],
  providers: [CacheService],
})
export class CacheModule {}
