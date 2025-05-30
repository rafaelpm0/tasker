import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({
      data: createServiceDto,
    });
  }

  async findAll() {
    const result = await this.prisma.service.findMany({
      orderBy: { id: 'asc' },
      include: {
        client: true,
        typeService: true,
      },
    });
    return result;
  }

  async findOne(id: number) {
    const service = await this.prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado`);
    }

    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      return await this.prisma.service.update({
        where: { id },
        data: updateServiceDto,
      });
    } catch (error) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.service.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new BadRequestException(
            `Não é possível remover o serviço com ID ${id} porque ele está sendo referenciado por outro registro.`
          );
        }
      }
      throw new NotFoundException(`Serviço com ID ${id} não encontrado`);
    }
  }
}
