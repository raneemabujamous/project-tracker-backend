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
import { Project } from '../../../../../../packages/domins';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper'
import { OrganizationEntity } from '@/modules/organization/infrastructure/persistence/relational/entities/organization.entity';
import { UserEntity } from '@/modules/user/infrastructure/persistence/relational/entities/user.entity';
import { ProjectUserEntity } from './project.user.entity';

export enum ProjectStatus {
  ACTIVE = "active",
  COMPLETED = "completed"
}

@Entity({
  name: 'projects',
})
export class ProjectEntity extends EntityRelationalHelper implements Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  organization_id: number;

  @Column()
  project_title: string;
  @Column({ type: "enum", enum: ProjectStatus, default: ProjectStatus.ACTIVE })
  status: ProjectStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
 
  @ManyToOne(
    () => OrganizationEntity,
    (user) => user.organization_id,
    {
      cascade: true,
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({
    name: 'organization_id',
    referencedColumnName: 'organization_id',
  })
  organization: OrganizationEntity;


  @OneToMany(() => ProjectUserEntity, (project_user) => project_user.project, {
    onDelete: 'CASCADE',
  })
  project_users: ProjectUserEntity[];

}
