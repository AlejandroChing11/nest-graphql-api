import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
export class Post {

  @PrimaryColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field((type) => String)
  title: string;

  @Column({
    nullable: true,
    type: 'text'
  })
  @Field({ nullable: true })
  content?: string;
}