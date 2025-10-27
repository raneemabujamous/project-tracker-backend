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
import { Organization } from '../../../../../../packages/domins';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper'
import { ProjectEntity } from '@/modules/project/infrastructure/persistence/relational/entities/project.entity';
import { UserEntity } from '@/modules/user/infrastructure/persistence/relational/entities/user.entity';


@Entity({
  name: 'organizations',
})
export class OrganizationEntity extends EntityRelationalHelper implements Organization {
  @PrimaryGeneratedColumn()
  organization_id: number;

  @Column()
  organization_title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => ProjectEntity, (project) => project.organization, {
    onDelete: 'CASCADE',
  })
  projects: ProjectEntity[];

  @OneToMany(() => UserEntity, (user) => user.organization, {
    onDelete: 'CASCADE',
  })
  users: ProjectEntity[];


}
