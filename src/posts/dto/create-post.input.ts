import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreatePostInput {
  @MaxLength(10, { message: 'Title is too long' })
  @MinLength(5, { message: 'Title is too short' })
  @IsNotEmpty()
  @Field()
  title: string;

  @MaxLength(200)
  @Field({ nullable: true })
  content?: string;


}