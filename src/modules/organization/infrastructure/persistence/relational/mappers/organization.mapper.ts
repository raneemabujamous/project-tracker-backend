import { Organization } from '@/packages/domins';
import { OrganizationEntity } from '../entities/organization.entity';

export class OrganizationMapper {
  static toDomain(entity: OrganizationEntity): Organization {
    const organization = new Organization();
    organization.organization_id = entity.organization_id;
    organization.organization_title = entity.organization_title;
    organization.createdAt = entity.createdAt;
    organization.updatedAt = entity.updatedAt;
    return organization;
  }

  static toPersistence(organization: Organization): OrganizationEntity {
    const entity = new OrganizationEntity();
    entity.organization_id = organization.organization_id;
    entity.organization_title = organization.organization_title;
    entity.createdAt = organization.createdAt;
    entity.updatedAt = organization.updatedAt;

    
    return entity;
  }
}
