import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        phone: string;
        extra: string | null;
    }>;
}
