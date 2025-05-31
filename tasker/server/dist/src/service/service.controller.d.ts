import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
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
    findOne(id: string): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
    update(id: string, updateClientDto: UpdateServiceDto): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
    }>;
}
