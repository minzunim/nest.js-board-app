import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from 'src/boards/boards.service';
import { BoardsController } from './boards/boards.controller';
import { Module } from '@nestjs/common';
import { typeORMConfig } from 'src/configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, AuthModule],
})
export class AppModule {}
