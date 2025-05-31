import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
    findAll(): Promise<({
        typeService: {
            id: number;
            title: string;
            description: string | null;
            hourRate: number;
            createdAt: Date;
            updatedAt: Date;
        };
        client: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            phone: string;
            extra: string | null;
        };
    } & {
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    })[]>;
    findOne(id: number): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
}
