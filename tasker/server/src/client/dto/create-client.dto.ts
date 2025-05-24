import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ description: 'Nome do cliente' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Email do cliente' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Telefone do cliente' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Informações adicionais', required: false })
  @IsString()
  @IsOptional()
  extra?: string;
}