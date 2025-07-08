import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
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
    findOne(id: string): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
    update(id: string, updateClientDto: UpdateServiceDto): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
    remove(id: string): Promise<{
        description: string;
        type_serv_id: number;
        client_id: number;
        qtn_min: number;
        id: number;
    }>;
}
