import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from './core.entity';
import { Todo } from './todo.entity';

@Entity('users')
export class User extends CoreEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({
    type: 'varchar',
    unique: true
  })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ default: false })
  isActivated: boolean;

  @Column({ type: 'uuid', nullable: true, unique: true })
  token: string | null;

  @OneToMany(() => Todo, (todo) => todo.user, { onDelete: 'NO ACTION' })
  todos: Todo[];
}
