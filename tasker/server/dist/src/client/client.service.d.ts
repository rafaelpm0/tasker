import { PrismaService } from '../../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClientDto: CreateClientDto): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<{
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
        name: string;
        email: string;
        phone: string;
        extra: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
