import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(createServiceDto: CreateServiceDto): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
    findAll(): Promise<({
        typeService: {
            id: number;
            description: string | null;
            title: string;
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
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    })[]>;
    findOne(id: string): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
    update(id: string, updateClientDto: UpdateServiceDto): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        type_serv_id: number;
        client_id: number;
        description: string;
        qtn_min: number;
    }>;
}
