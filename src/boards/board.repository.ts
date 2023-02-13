import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { BoardStatus } from 'src/boards/board-status.enum';
import { CustomRepository } from 'src/boards/typeorm-ex.decorator';
import { User } from 'src/auth/user.entity';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.save(board);
    return board;
  }
}
