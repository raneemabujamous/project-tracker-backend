import { Exclude, Expose } from 'class-transformer';
export enum ProjectStatus {
  ACTIVE = "active",
  COMPLETED = "completed"
};
export class Project {
  project_id: number;
  project_title: string 
  status:ProjectStatus 
user_id:number 
organization_id:number
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
