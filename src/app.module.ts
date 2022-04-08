import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
//import { EnterprisesModule } from './enterprises/enterprises.module';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule, ApplicationsModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
