import { Module } from '@nestjs/common';

import { ServiceController } from './service.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { ServiceService } from './service.service';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, PrismaService],
})
export class ServiceModule {}