import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';
import { Prisma } from '@prisma/client';

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
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new BadRequestException(
            `Não é possível remover o tipo de serviço com ID ${id} porque ele está sendo referenciado por outro registro.`
          );
        }
      }
      throw new NotFoundException(`Tipo de serviço com ID ${id} não encontrado`);
    }
  }
}