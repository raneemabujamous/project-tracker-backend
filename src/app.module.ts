import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectModule } from './modules/project/project.module';
import { OrganizationModule } from './modules/organization/organization.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const ssl = (config.get<string>('DB_SSL') ?? 'true') === 'true';
        const rejectUnauthorized =
          (config.get<string>('DB_SSL_REJECT_UNAUTHORIZED') ?? 'true') === 'true';

        return {
          type: (config.get<'postgres'>('DB_TYPE') ?? 'postgres'),
          host: config.get<string>('DB_HOST'),
          port: Number(config.get<string>('DB_PORT') ?? 5432),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_NAME'),
          ssl,
          ...(ssl ? { extra: { ssl: { rejectUnauthorized } } } : {}),

          autoLoadEntities: true,
          synchronize: false, // use migrations in non-local envs
        } as DataSourceOptions;
      },
      dataSourceFactory: async (options?: DataSourceOptions) => {
        if (!options) throw new Error('TypeORM options are undefined.');
        return new DataSource(options).initialize();
      },
    }),

    UserModule,
    AuthModule,
    ProjectModule,
    OrganizationModule,
  ],
})
export class AppModule {}
