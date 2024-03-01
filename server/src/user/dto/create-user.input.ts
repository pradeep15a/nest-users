import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name : string;

  @Field()
  username : string;

  @Field(type => Int)
  age : number;

  @Field({nullable:true})
  description : string;
}
