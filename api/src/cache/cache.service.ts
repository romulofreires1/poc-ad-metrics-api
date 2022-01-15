import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Store, Cache } from 'cache-manager';
import { createClient } from 'redis';
interface RedisCache extends Cache {
  store: RedisStore;
}

type Client = ReturnType<typeof createClient>;

interface RedisStore extends Store {
  name: 'redis';
  getClient: () => Client;
  isCacheableValue: (value: any) => boolean;
}

@Injectable()
export class CacheService {
  private client: Client;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: RedisCache) {
    this.setClient();
  }
  async setClient() {
    this.client = await this.cacheManager.store.getClient();
  }

  incr(id: string) {
    return this.client.incr(id);
  }

  findOne(id: string) {
    return this.cacheManager.get(id);
  }

  remove(id: string) {
    return this.cacheManager.del(id);
  }

  setTTL(id: string) {
    const ttl = parseInt(process.env.TTL_SECONDS);
    return this.client.expire(id, ttl);
  }

  removeTTL(id: string) {
    return this.client.persist(id);
  }
}
