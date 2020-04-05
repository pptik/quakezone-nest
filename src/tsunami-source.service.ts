import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Ordering, SortDirection } from './ordering';

import { TsunamiSource } from './entities/tsunami-source.entity';

class FindAllOptions {
  orderBy?: Ordering[];
  first?: number;
  after?: string;
  last?: number;
  before?: string;
}

/**
 * Information on the source of the tsunami.

### Information Sources

1. `noaa`: [NOAA NGDC/WDS](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)

### Variable Definitions for the Tsunami Source Events

- ID
- Date: Year, Month, Day, Hour, Minute, Second
- Location: Latitude, Longitude, Location Name, State, Country, Region Code
- Cause Code for the Tsunami
- If the tsunami source was an Earthquake:
  - Focal Depth,
  - Primary Magnitude
- Tsunami Source Event Measurements:
  - Tsunami Event Validity
  - Maximum Water Height
  - Tsunami Magnitudes: Abe, Iida-Imamura
  - Tsunami Intensity: Soloviev
  - Tsunami Warning Status
- Tsunami Effects:
  - Number of Deaths, Deaths Description:
  - Number of Missing, Missing Description
  - Number of Injuries, Injuries Description
  - Damage Millions Dollars, Damage Description
  - Number of Houses Destroyed, Houses Destroyed Description
  - Number of Houses Damaged, Houses Damaged Description
- Tsunami and Source Event Total Effects:
  - Total Number of Deaths, Total Deaths Description
  - Total Number of Missing, Total Missing Description
  - Total Number of Injuries, Total Injuries Description
  - Total Damage in Millions Dollars Total Damage Description
  - Total Number of Houses Destroyed, Total Houses Destroyed Description
  - Total Number of Houses Damaged, Total Houses Damaged Description

 */

@Injectable()
export class TsunamiSourceService {
  constructor(
    @InjectModel(TsunamiSource)
    private readonly tsunamiSourceModel: ReturnModelType<typeof TsunamiSource>
  ) {}


  async findOne(id: ObjectId | string): Promise<TsunamiSource | null> {
    if (id == null) {
      throw new Error('id is required');
    }
    return await this.tsunamiSourceModel.findOne({_id: id});
  }

  async findAll(options: FindAllOptions = {}): Promise<TsunamiSource[]> {
    let stmt = this.tsunamiSourceModel.find();
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
