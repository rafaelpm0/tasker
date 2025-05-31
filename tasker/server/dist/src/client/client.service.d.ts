import { PrismaService } from '../../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClientDto: CreateClientDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
}
