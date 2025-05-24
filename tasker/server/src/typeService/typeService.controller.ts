import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeServiceService } from './typeService.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('type-service')
@Controller('type-service')
export class TypeServiceController {
  constructor(private readonly typeServiceService: TypeServiceService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo tipo de serviço' })
  create(@Body() createTypeServiceDto: CreateTypeServiceDto) {
    return this.typeServiceService.create(createTypeServiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os tipos de serviço' })
  findAll() {
    return this.typeServiceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar tipo de serviço por ID' })
  findOne(@Param('id') id: string) {
    return this.typeServiceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar tipo de serviço' })
  update(@Param('id') id: string, @Body() updateTypeServiceDto: UpdateTypeServiceDto) {
    return this.typeServiceService.update(+id, updateTypeServiceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover tipo de serviço' })
  remove(@Param('id') id: string) {
    return this.typeServiceService.remove(+id);
  }
}