import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeServiceDto {
  @ApiProperty({ description: 'Nome do tipo de serviço' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Descrição do tipo de serviço' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Valor hora do serviço' })
  @IsNumber()
  @IsNotEmpty()
  hourRate: number;
}