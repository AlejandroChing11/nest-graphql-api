import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "src/authors/entities/author.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Post {

  @PrimaryGeneratedColumn()
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

  @Column()
  @Field()
  authorId: string;

  @ManyToOne(() => Author, author => author.posts)
  @Field(() => Author)
  author: Author;

}