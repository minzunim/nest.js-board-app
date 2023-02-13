import { User } from 'src/auth/user.entity';
import { BoardStatus } from 'src/boards/board-status.enum';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
