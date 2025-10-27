import { Project } from '@/packages/domins';
import { ProjectEntity } from '../entities/project.entity';

export class ProjectMapper {
  static toDomain(entity: ProjectEntity): Project {
    const project = new Project();
    project.project_id = entity.project_id;
    
    project.organization_id = entity.organization_id;

    project.user_id = entity.user_id;
    project.project_title = entity.project_title;
    project.status = entity.status;    
    project.createdAt = entity.createdAt;
    project.updatedAt = entity.updatedAt;
    return project;
  }

  static toPersistence(project: Project): ProjectEntity {
    const entity = new ProjectEntity();
    entity.project_id = project.project_id;
    entity.user_id = project.user_id;
    entity.organization_id = project.organization_id;

    entity.project_title = project.project_title;
    entity.status = project.status;
    entity.createdAt = project.createdAt;
    entity.updatedAt = project.updatedAt;

    return entity;
  }
}
