import {
  Injectable,
} from '@nestjs/common';
import { ProjectRepository } from './infrastructure/persistence/project.repository';
import { User } from '../../packages/domins'
import { NullableType } from '@/utils/types/nullable.type';
import { EntityCondition } from '@/utils/types/entity-condition.type';
import {CreateProjectDto,UpdateProjectDto} from '@/packages/dto/project'
import { Project } from '@/packages/domins';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectRepository: ProjectRepository,

    
  ) {}




  async create(
    data: Omit<
    CreateProjectDto,
      'project_id' | 'createdAt' | 'updatedAt' | 'deletedAt'
    >
  , user_id): Promise<Project> {

    console.log("user_id::",user_id)
    const project = await this.projectRepository.createProject({
...data  , user_id:user_id   });
    

    return project;
  }



  async updateProject(
    user_id: number,
    payload: Partial<
      Omit<Project, 'createdAt' | 'updatedAt' | 'deletedAt'>
    >
  ): Promise<Project | null> {

    const project = await this.projectRepository.getProjectById(payload.project_id);
    if (!project) {
      throw new NotFoundException('Project not found');
    }
  
    if (project.user_id !== user_id) {
      throw new ForbiddenException("You can't update this project; you're not the owner");
    }
    if ('user_id' in payload || 'organization_id' in payload) {
      throw new BadRequestException('Cannot change owner or organization of a project');
    }
    
      return this.projectRepository.update(
        payload
      );
    
  
  
  }  


  async delete(project_id: Project['project_id'] , user_id : Project['user_id'] ): Promise<void> {
    const project = await this.projectRepository.getProjectById(project_id);
    if (!project) {
      throw new NotFoundException('Project not found');
    }
  
    if (project.user_id !== user_id) {
      throw new ForbiddenException("You can't update this project; you're not the owner");
    }

    await this.projectRepository.delete(project_id);
  }

  getAllProj(organization_id:number): Promise<Project[]> {
    return this.projectRepository.getAllProj(organization_id);
  }

  
}
