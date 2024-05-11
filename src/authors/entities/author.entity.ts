import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {

  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Column({
    type: 'text',
  })
  @Field()
  name: string;
}
