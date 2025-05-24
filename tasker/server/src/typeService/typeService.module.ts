import { Module } from '@nestjs/common';
import { TypeServiceService } from './typeService.service';
import { TypeServiceController } from './typeService.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TypeServiceController],
  providers: [TypeServiceService, PrismaService],
})
export class TypeServiceModule {}