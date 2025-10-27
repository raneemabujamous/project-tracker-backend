import {
    Column,
    AfterLoad,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
  import { ProjectUser } from '../../../../../../packages/domins';
  import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper'
  import { OrganizationEntity } from '@/modules/organization/infrastructure/persistence/relational/entities/organization.entity';
  import { UserEntity } from '@/modules/user/infrastructure/persistence/relational/entities/user.entity';
  import {ProjectEntity} from './project.entity'

  @Entity({
    name: 'project-user',
  })
  export class ProjectUserEntity extends EntityRelationalHelper implements ProjectUser {
    @PrimaryGeneratedColumn()
    project_user_id: number;
  
    @Column()
    project_id: number;

    @Column()
    user_id: number;
  
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  
    @ManyToOne(
      () => UserEntity,
      (user) => user.user_id,
      {
        cascade: true,
        onDelete: 'CASCADE',
      }
    )
    @JoinColumn({
      name: 'user_id',
      referencedColumnName: 'user_id',
    })
    user: UserEntity;
  
    
    @ManyToOne(
      () => ProjectEntity,
      (user) => user.project_id,
      {
        cascade: true,
        onDelete: 'CASCADE',
      }
    )
    @JoinColumn({
      name: 'project_id',
      referencedColumnName: 'project_id',
    })
    project: ProjectEntity;
  
  }
  