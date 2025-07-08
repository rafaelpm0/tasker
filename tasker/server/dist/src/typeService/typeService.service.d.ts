import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';
export declare class TypeServiceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTypeServiceDto: CreateTypeServiceDto): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateTypeServiceDto: UpdateTypeServiceDto): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
