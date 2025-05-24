import { Module } from '@nestjs/common';
import { TypeServiceModule } from './typeService/typeService.module';
import { ClientModule } from './client/client.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    TypeServiceModule,
    ClientModule,
    ServiceModule
  ],
})
export class AppModule {}