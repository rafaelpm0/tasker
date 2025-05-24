import { PartialType } from '@nestjs/swagger';
import { CreateTypeServiceDto } from './create-typeService.dto';

export class UpdateTypeServiceDto extends PartialType(CreateTypeServiceDto) {}