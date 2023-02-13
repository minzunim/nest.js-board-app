import { AuthGuard } from '@nestjs/passport';
import { CreateBoardDto } from './dto/create-board.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Logger,
} from '@nestjs/common';
import { BoardsService } from 'src/boards/boards.service';
import { BoardStatus } from './board-status.enum';
import { BoardStatusValidationPipe } from 'src/boards/pipes/board-status-validation.pipe';
import { Board } from 'src/boards/board.entity';
import { UseGuards } from '@nestjs/common/decorators';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('BoardsController');
  constructor(private boardsService: BoardsService) {}

  // 모든 게시물을 가져오는 핸들러
  @Get()
  getAllBoard(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardsService.getAllBoards(user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    this.logger.verbose(
      `User ${user.username} creating a new board. Payload: ${JSON.stringify(
        createBoardDto,
      )}`,
    );
    return this.boardsService.createBoard(createBoardDto, user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.boardsService.deleteBoard(id, user);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoard(id, status);
  }
}
