import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { BoardStatus } from 'src/boards/board-status.enum';
import { CustomRepository } from 'src/boards/typeorm-ex.decorator';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
