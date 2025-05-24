import { TypeServiceService } from './typeService.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';
export declare class TypeServiceController {
    private readonly typeServiceService;
    constructor(typeServiceService: TypeServiceService);
    create(createTypeServiceDto: CreateTypeServiceDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateTypeServiceDto: UpdateTypeServiceDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
