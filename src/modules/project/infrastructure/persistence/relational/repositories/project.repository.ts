import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { NullableType } from '../../../../../../utils/types/nullable.type';
import { Project, User } from '../../../../../../packages/domins';
import { ProjectRepository } from '../../project.repository';
import { ProjectMapper} from '../mappers/project.mapper';
import { EntityCondition } from '../../../../../../utils/types/entity-condition.type';
import{ProjectEntity} from '../entities/project.entity'
@Injectable()
export class ProjectsRelationalRepository implements ProjectRepository {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>


  ) {}

  async createProject(data: Project): Promise<Project> {

    console.log("data::",data)
    const persistenceModel = ProjectMapper.toPersistence(data); // ProjectEntity
    const newEntity = await this.projectRepository.save(
      this.projectRepository.create(persistenceModel)
    );
    return ProjectMapper.toDomain(newEntity); // returns Project
  
  }


  async getProjectById(projectId: number): Promise<Project> {
    const entity = await this.projectRepository.findOneBy({ project_id: projectId });
    if (!entity) throw new Error('Project not found');
    return ProjectMapper.toDomain(entity);
  }


  async update(
    payload: Partial<
      Omit<Project, 'createdAt' | 'updatedAt' | 'deletedAt'>
    >
  ): Promise<Project | null> {
    console.log("payload:::",payload)
    const entity = await this.projectRepository.findOne({
      where: { project_id: Number(payload.project_id) },
    });
    if (!entity) {
      throw new Error('Session not found');
    }

    const updatedEntity = await this.projectRepository.save(
      this.projectRepository.create(
        ProjectMapper.toPersistence({
          ...ProjectMapper.toDomain(entity),
          ...payload,
        })
      )
    );

    return ProjectMapper.toDomain(updatedEntity);
  }
  async delete(project_id: Project['project_id']): Promise<void> {
    await this.projectRepository
      .createQueryBuilder()
      .delete()
      .from(ProjectEntity)
      .where('project_id = :project_id', { project_id })
      .execute();
  }


  async getAllProj(organization_id:number): Promise<Project[]> {
    return this.projectRepository.find({
      where: { organization: { organization_id: organization_id } },    // nested filter via relation
      relations: ['user']  ,                // include owner
    });
  }



}