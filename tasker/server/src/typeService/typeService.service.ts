import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';

@Injectable()
export class TypeServiceService {
  constructor(private prisma: PrismaService) {}

  async create(createTypeServiceDto: CreateTypeServiceDto) {
    return this.prisma.typeService.create({
      data: createTypeServiceDto,
    });
  }

  async findAll() {
    return this.prisma.typeService.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const typeService = await this.prisma.typeService.findUnique({
      where: { id },
    });

    if (!typeService) {
      throw new NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
    }

    return typeService;
  }

  async update(id: number, updateTypeServiceDto: UpdateTypeServiceDto) {
    try {
      return await this.prisma.typeService.update({
        where: { id },
        data: updateTypeServiceDto,
      });
    } catch (error) {
      throw new NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.typeService.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
    }
  }
}