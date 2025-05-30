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
        client: {
            id: number;
            name: string;
            email: string;
            phone: string;
            extra: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        typeService: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            title: string;
            hourRate: number;
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
