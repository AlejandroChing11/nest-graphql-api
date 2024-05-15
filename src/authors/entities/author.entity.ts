import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({
    type: 'text',
  })
  @Field()
  name: string;
}
