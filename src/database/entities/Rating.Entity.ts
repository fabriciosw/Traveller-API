import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import User from './User.Entity';
import Base from './Base.Entity';

@Entity('ratings')
export default class Post extends Base {
  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: false })
  placeId: string;

  @Column({ nullable: false })
  comment: string;

  @Column({ nullable: false })
  grade: 1 | 2 | 3 | 4 | 5;
}
