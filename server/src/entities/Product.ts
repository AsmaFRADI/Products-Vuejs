import { Entity, ObjectIdColumn, Column, ObjectID, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ unique: true })
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  category: string;

  @Column()
  price: number;

}
