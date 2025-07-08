import { TypeServiceService } from './typeService.service';
import { CreateTypeServiceDto } from './dto/create-typeService.dto';
import { UpdateTypeServiceDto } from './dto/update-typeService.dto';
export declare class TypeServiceController {
    private readonly typeServiceService;
    constructor(typeServiceService: TypeServiceService);
    create(createTypeServiceDto: CreateTypeServiceDto): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateTypeServiceDto: UpdateTypeServiceDto): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        title: string;
        id: number;
        hourRate: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
