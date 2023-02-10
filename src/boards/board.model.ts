// 타입 체크만 해주기 위해 interface 사용
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 공개글인지 비공개글인지 확인
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
