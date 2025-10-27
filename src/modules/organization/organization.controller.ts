import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Get,
  Query,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { OrganizationsService } from './organization.service';
import { ApiBearerAuth, ApiTags, ApiParam } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from '../user/user.decorator';
import { JwtPayloadType } from '../auth/strategies/types/jwt-payload.type';
import {CreateOrganizationDto} from '@/packages/dto/organization'
import { Organization } from '@/packages/domins';

@ApiTags('Organizations')
@Controller({
  path: 'organization',
  version: '1',
})
export class OrganizationsController {
  constructor(private readonly organizationService: OrganizationsService) {}


  @Post()
  @HttpCode(HttpStatus.CREATED)
  createOne(
    @AuthUser() jwtPayload: JwtPayloadType,
    @Body() createOrganizationDto: CreateOrganizationDto,
    
  ): Promise<Organization> {
    return this.organizationService.create(createOrganizationDto);
  }



  @Get('all')
  @HttpCode(HttpStatus.OK)
  async getAllOrg(
  ): Promise<Organization[]> {
    let data = await this.organizationService.getAllOrg();
    return data;
  }

}


