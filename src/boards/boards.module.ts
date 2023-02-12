import { Module } from '@nestjs/common';
import { BoardRepository } from 'src/boards/board.repository';
import { TypeOrmExModule } from 'src/boards/typeorm-ex.module';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
