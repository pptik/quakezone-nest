import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Ordering, SortDirection } from './ordering';

import { TsunamiRunup } from './entities/tsunami-runup.entity';

class FindAllOptions {
  orderBy?: Ordering[];
  first?: number;
  after?: string;
  last?: number;
  before?: string;
}

/**
 * Information on locations where tsunami effects occurred.

Data include: arrival date and time, travel time, maximum water heights, horizontal inundation distances, deaths, injuries, and damage for specific locations.

### Information Sources

1. `noaa`: [NGDC/WGS NOAA](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)

 */

@Injectable()
export class TsunamiRunupService {
  constructor(
    @InjectModel(TsunamiRunup)
    private readonly tsunamiRunupModel: ReturnModelType<typeof TsunamiRunup>
  ) {}


  async findOne(id: ObjectId | string): Promise<TsunamiRunup | null> {
    if (id == null) {
      throw new Error('id is required');
    }
    return await this.tsunamiRunupModel.findOne({_id: id});
  }

  async findAll(options: FindAllOptions = {}): Promise<TsunamiRunup[]> {
    let stmt = this.tsunamiRunupModel.find();
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
