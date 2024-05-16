import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreatePostInput {
  @MaxLength(20, { message: 'Title is too long' })
  @MinLength(5, { message: 'Title is too short' })
  @IsNotEmpty()
  @Field()
  title: string;

  @MaxLength(200)
  @Field({ nullable: true })
  content?: string;

  @IsUUID()
  @Field()
  authorId: string;

}