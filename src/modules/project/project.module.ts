import { Module } from '@nestjs/common';

import { ProjectsController } from './project.controller';

import { ProjectsService } from './project.service';
import { RelationalProjectPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
const infrastructurePersistenceModule = RelationalProjectPersistenceModule;

@Module({
  imports: [infrastructurePersistenceModule,   UserModule, AuthModule, // <- VERY IMPORTANT!
],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService, infrastructurePersistenceModule],
})
export class ProjectModule {}
