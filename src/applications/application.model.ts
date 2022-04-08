import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ApplicationDocument = Application & Document;

@Schema()
@ApiTags('applications')
export class Application {
  @Prop()
  @ApiProperty()
  username: string;

  @Prop()
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  password: string;

  @Prop()
  @ApiProperty()
  age: string;

  @Prop()
  @ApiProperty()
  location: string;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);