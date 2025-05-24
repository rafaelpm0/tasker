import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@ApiTags('service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo serviço' })
  @ApiResponse({ status: 201, description: 'Serviço criado com sucesso.' })
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os serviços' })
  @ApiResponse({ status: 200, description: 'Lista de serviços retornada com sucesso.' })
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um serviço pelo ID' })
  @ApiResponse({ status: 200, description: 'Serviço encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um serviço' })
  @ApiResponse({ status: 200, description: 'Serviço atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um serviço' })
  @ApiResponse({ status: 200, description: 'Serviço removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}