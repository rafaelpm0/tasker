import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
    findAll(): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
}
