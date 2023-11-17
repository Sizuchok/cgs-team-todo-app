import { Column, Entity } from 'typeorm';
import { CoreEntity } from './core.entity';

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
}
