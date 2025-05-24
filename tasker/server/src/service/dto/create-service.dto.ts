import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ description: 'ID do tipo de serviço' })
  @IsNumber()
  @IsNotEmpty()
  type_serv_id: number;

  @ApiProperty({ description: 'ID do cliente' })
  @IsNumber()
  @IsNotEmpty()
  client_id: number;

  @ApiProperty({ description: 'Descrição do serviço' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Tempo de serviço em minutos' })
  @IsNumber()
  @IsNotEmpty()
  qtn_min: number;

}