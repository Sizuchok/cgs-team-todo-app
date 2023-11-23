import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CoreEntity } from './core.entity';
import { User } from './user.entity';

@Entity('todos')
export class Todo extends CoreEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'boolean', default: false })
  isPublic: boolean;

  @Column({ type: 'boolean', default: false })
  isChecked: boolean;

  @ManyToOne(() => User, (user) => user.todos, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'userId'
  })
  user: User;

  @Column({
    name: 'userId',
    type: 'uuid'
  })
  userId: string;
}
