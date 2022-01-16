import { Controller, Get, Put, Param, Delete } from '@nestjs/common';
import { CacheService } from './cache.service';
@Controller('')
export class CacheController {
  constructor(private readonly cacheService: CacheService) {}

  @Put('increment/:id')
  incr(@Param('id') id: string) {
    this.cacheService.incr(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cacheService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cacheService.remove(id);
  }

  @Put('ttl/:id')
  setTTL(@Param('id') id: string) {
    this.cacheService.setTTL(id);
  }

  @Delete('ttl/:id')
  removeTTL(@Param('id') id: string) {
    this.cacheService.removeTTL(id);
  }
}
