import { Column, Entity, OneToMany } from 'typeorm';
import Base from './Base.Entity';
import Rating from './Rating.Entity';

@Entity('users')
export default class User extends Base {
  @Column({ length: 120 })
  public name: string;

  @Column({ nullable: false })
  public email: string;

  @Column({ nullable: false })
  public password: string;

  @Column({ nullable: false })
  public photoUrl: string;

  @OneToMany(() => Rating, (rating: Rating) => rating.user)
  ratings: Rating[];
}
