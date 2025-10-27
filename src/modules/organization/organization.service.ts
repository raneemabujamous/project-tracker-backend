import {
  Injectable,
} from '@nestjs/common';
import { OrganizationRepository } from './infrastructure/persistence/organization.repository';
import { User } from '../../packages/domins'
import { NullableType } from '@/utils/types/nullable.type';
import { EntityCondition } from '@/utils/types/entity-condition.type';
import {CreateOrganizationDto} from '@/packages/dto/organization'
import { Organization } from '@/packages/domins';

@Injectable()
export class OrganizationsService {
  constructor(private readonly organizationRepository: OrganizationRepository,


    
  ) {}

  
  async create(
    data: Omit<
    CreateOrganizationDto,
    'createdAt' | 'updatedAt' | 'deletedAt'
    >
  ,): Promise<Organization> {
    const project = await this.organizationRepository.createOrganization(data    );
    

    return project;
  }

  getAllOrg(): Promise<Organization[]> {
    return this.organizationRepository.getAllOrg();
  }

  
  
}
