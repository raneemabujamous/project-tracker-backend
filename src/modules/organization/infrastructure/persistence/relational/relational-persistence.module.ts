import { Module } from '@nestjs/common';
import { OrganizationRepository } from '../organization.repository';
import { OrganizationsRelationalRepository } from './repositories/organization.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationEntity } from './entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationEntity])],
  providers: [
    {
      provide: OrganizationRepository,
      useClass: OrganizationsRelationalRepository,
    },
  ],
  exports: [OrganizationRepository],
})
export class RelationalOrganizationPersistenceModule {}
