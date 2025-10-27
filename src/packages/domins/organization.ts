import { Exclude, Expose } from 'class-transformer';

export class Organization {
  organization_id: number;
  organization_title: string 
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
