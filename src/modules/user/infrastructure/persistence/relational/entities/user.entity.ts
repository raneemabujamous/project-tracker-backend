
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
import { User } from '../../../../../../packages/domins';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper'
import { Exclude, Expose } from 'class-transformer';
import { OrganizationEntity } from '@/modules/organization/infrastructure/persistence/relational/entities/organization.entity';
import { ProjectEntity } from '@/modules/project/infrastructure/persistence/relational/entities/project.entity';
import { ProjectUserEntity } from '@/modules/project/infrastructure/persistence/relational/entities/project.user.entity';
@Entity({
  name: 'users',
})
export class UserEntity extends EntityRelationalHelper implements User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  organization_id:number
  @Column({ type: String, unique: true, nullable: true })
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  public previousPassword?: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @Index()
  @Column({ type: String, nullable: true })
  first_name: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  last_name: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  
  @OneToMany(() => ProjectUserEntity, (project) => project.user, {
    onDelete: 'CASCADE',
  })
  projects_user: ProjectUserEntity[];
  

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



}
