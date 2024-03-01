import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('usertable')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id : number;

  @Column()
  @Field()
  name : string;

  @Column()
  @Field()
  username : string;

  @Column()
  @Field(type => Int)
  age : number;

  @Column({nullable:true})
  @Field({nullable:true})
  description : string;
}
