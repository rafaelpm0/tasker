import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';
export declare class TypeServiceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTypeServiceDto: CreateTypeServiceDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateTypeServiceDto: UpdateTypeServiceDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
