import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Application, ApplicationDocument } from './application.model';
import { Model } from 'mongoose';


@Injectable()
export class ApplicationsService {
  constructor(@InjectModel(Application.name) private applicationModel: Model<ApplicationDocument>) {}

  create(application:Application): Promise<Application> {
    return this.applicationModel.create(application);
    
  }

  findAll() {
    console.log(this.applicationModel.find());
    return this.applicationModel.find();
  }

  findOne(id: string)  {
    return this.applicationModel.findById(id);
  }

  update(id: string, application: Application) {
    return this.applicationModel.findByIdAndUpdate(id, application);
  }

  remove(id: string) {
    return this.applicationModel.findByIdAndDelete(id);
  }
}