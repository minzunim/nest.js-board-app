import { BoardsModule } from './boards/boards.module';
import { BoardsService } from 'src/boards/boards.service';
import { BoardsController } from './boards/boards.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
