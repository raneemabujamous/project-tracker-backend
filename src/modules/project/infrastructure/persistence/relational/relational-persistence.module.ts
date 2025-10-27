import { Module } from '@nestjs/common';
import { ProjectRepository } from '../project.repository';
import { ProjectsRelationalRepository } from './repositories/project.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { ProjectUserEntity } from './entities/project.user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity , ProjectUserEntity])],
  providers: [
    {
      provide: ProjectRepository,
      useClass: ProjectsRelationalRepository,
    },
  ],
  exports: [ProjectRepository],
})
export class RelationalProjectPersistenceModule {}
