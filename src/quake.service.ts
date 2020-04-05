import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Ordering, SortDirection } from './ordering';

import { Quake } from './entities/quake.entity';

class FindAllOptions {
  orderBy?: Ordering[];
  first?: number;
  after?: string;
  last?: number;
  before?: string;
}

/**
 * Information on earthquakes.
 */

@Injectable()
export class QuakeService {
  constructor(
    @InjectModel(Quake)
    private readonly quakeModel: ReturnModelType<typeof Quake>
  ) {}


  async findOne(id: ObjectId | string): Promise<Quake | null> {
    if (id == null) {
      throw new Error('id is required');
    }
    return await this.quakeModel.findOne({_id: id});
  }

  async findAll(options: FindAllOptions = {}): Promise<Quake[]> {
    let stmt = this.quakeModel.find();
    if (options.orderBy && options.orderBy.length >= 1) {
      const sortOptions: {[key: string]: SortDirection} = {};
      for (const ordering of options.orderBy) {
        sortOptions[ordering.sort] = ordering.direction || SortDirection.asc;
      }
      stmt = stmt.sort(sortOptions);
    }
    if (options.first != null) {
      stmt = stmt.limit(options.first);
    }
    return (await stmt) || [];
  }

}
