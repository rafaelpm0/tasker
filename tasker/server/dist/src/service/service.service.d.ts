import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
    findAll(): Promise<({
        typeService: {
            description: string | null;
            title: string;
            id: number;
            hourRate: number;
            createdAt: Date;
            updatedAt: Date;
        };
        client: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            phone: string;
            extra: string | null;
        };
    } & {
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
    remove(id: number): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
}
