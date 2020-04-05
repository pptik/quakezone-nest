import { ObjectType, ID, Field, Float, Int,} from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { modelOptions, prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Node } from '../nestjs-graphql-relay';
import { GeoPoint } from '../geopoint';

/**
 * Information on locations where tsunami effects occurred.

Data include: arrival date and time, travel time, maximum water heights, horizontal inundation distances, deaths, injuries, and damage for specific locations.

### Information Sources

1. `noaa`: [NGDC/WGS NOAA](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)

 */
@modelOptions({schemaOptions: {collection: 'tsunamiRunup'}})
@ObjectType({implements: Node,
  description: "Information on locations where tsunami effects occurred.\n\nData include: arrival date and time, travel time, maximum water heights, horizontal inundation distances, deaths, injuries, and damage for specific locations.\n\n### Information Sources\n\n1. `noaa`: [NGDC/WGS NOAA](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)\n"
})
export class TsunamiRunup extends Node {  
  @prop({alias: 'id'})
  _id?: ObjectId;

  @Field(() => ID, {nullable: false})
  id?: string;



  /**
   * Tsunami source.
   * 
   * Tsunami source document.
  */ 
  @prop()
  @Field(() => ID, {nullable: true,
    description: "Tsunami source document."})
  tsunamiSource?: string;

  /**
   * Information source.
   * 
   * 1. `noaa`: [NGDC/WGS NOAA](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)    

  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "1. `noaa`: [NGDC/WGS NOAA](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)    \n"})
  infoSource?: string;

  /**
   * NOAA tsunami runup ID.
   * 
   * The unique numeric identifier of the record in [NOAA Tsunami Runup database](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml).
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "The unique numeric identifier of the record in [NOAA Tsunami Runup database](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)."})
  noaaTsunamiRunupId?: number;

  /**
   * NOAA tsunami event ID.
   * 
   * The unique numeric identifier of the record in [NOAA Tsunami Event database](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml).
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "The unique numeric identifier of the record in [NOAA Tsunami Event database](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)."})
  noaaTsunamiEventId?: number;

  /**
   * Year (source).
   * 
   * Source event date. Valid values: -2000 to Present

Format +/-yyyy (-is B.C, +is A.D.)
The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Source event date. Valid values: -2000 to Present\n\nFormat +/-yyyy (-is B.C, +is A.D.)\nThe Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    \n"})
  year?: number;

  /**
   * Month (source).
   * 
   * Source event date. Valid values: 1-12

The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Source event date. Valid values: 1-12\n\nThe Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    \n"})
  month?: number;

  /**
   * Day (source).
   * 
   * Source event date. Valid values: 1-31 (where months apply)

The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Source event date. Valid values: 1-31 (where months apply)\n\nThe Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    \n"})
  day?: number;

  /**
   * Hour (source).
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  hour?: number;

  /**
   * Minute (source).
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  minute?: number;

  /**
   * Second (source).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  second?: number;

  /**
   * Doubtful runup observation.
   * 
   * A "?" in the Doubtful column indicates a doubtful runup entry.
An "M" indicates the waves likely had a meteorologic source, and thus were not true tsunami waves.    

  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "A \"?\" in the Doubtful column indicates a doubtful runup entry.\nAn \"M\" indicates the waves likely had a meteorologic source, and thus were not true tsunami waves.    \n"})
  doubtful?: string;

  /**
   * Country.
   * 
   * The country where the tsunami effects were observed.
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The country where the tsunami effects were observed."})
  country?: string;

  /**
   * State.
   * 
   * The State, Province or Prefecture where the tsunami effects were observed.
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The State, Province or Prefecture where the tsunami effects were observed."})
  state?: string;

  /**
   * Location.
   * 
   * The location (city, state or island) where the tsunami effects were observed.
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The location (city, state or island) where the tsunami effects were observed."})
  locationName?: string;

  /**
   * Latitude.
   * 
   * Valid values: -90 to +90

Latitude: 0 to 90 (Northern Hemisphere) -90 to 0 (Southern Hemisphere)

The latitude and longitude of the location (city, state or island) where the tsunami effects occurred.

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: -90 to +90\n\nLatitude: 0 to 90 (Northern Hemisphere) -90 to 0 (Southern Hemisphere)\n\nThe latitude and longitude of the location (city, state or island) where the tsunami effects occurred.\n"})
  latitude?: number;

  /**
   * longitude.
   * 
   * Valid values: -180 to +180

Longitude: 0 to 180 (Eastern Hemisphere) -180 to 0 (Western Hemisphere)

The latitude and longitude of the location (city, state or island) where the tsunami effects occurred.    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: -180 to +180\n\nLongitude: 0 to 180 (Eastern Hemisphere) -180 to 0 (Western Hemisphere)\n\nThe latitude and longitude of the location (city, state or island) where the tsunami effects occurred.    \n"})
  longitude?: number;

  /**
   * Region code.
   * 
   * Regional boundaries are based on frequency of occurrence of tsunamigenic events, geophysical relations, risk in distant areas and political justification.

- 77 =	West Coast of Africa
- 78 =	Central Africa
- 73 =	Northeast Atlantic Ocean
- 72 =	Northwest Atlantic Ocean
- 70 =	Southeast Atlantic Ocean
- 71 =	Southwest Atlantic Ocean
- 75 =	E. Coast USA and Canada, St Pierre and Miquelon
- 76 =	Gulf of Mexico
- 74 =	Caribbean Sea and Bermuda
- 40 =	Black Sea and Caspian Sea
- 50 =	Mediterranean Sea
- 30 =	Red Sea and Persian Gulf
- 60 =	Indian Ocean (including west coast of Australia)
- 87 =	Alaska (including Aleutian Islands)
- 84 =	China, North and South Korea, Philippines, Taiwan
- 81 =	E Coast Australia, New Zealand, South Pacific Is.
- 80 =	Hawaii, Johnston Atoll, Midway I
- 83 =	E. Indonesia (Pacific Ocean) and Malaysia
- 82 =	New Caledonia, New Guinea, Solomon Is., Vanuatu
- 86 =	Kamchatka and Kuril Islands
- 85 =	Japan
- 88 =	West Coast of North and Central America
- 89 =	West Coast of South America    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Regional boundaries are based on frequency of occurrence of tsunamigenic events, geophysical relations, risk in distant areas and political justification.\n\n- 77 =\tWest Coast of Africa\n- 78 =\tCentral Africa\n- 73 =\tNortheast Atlantic Ocean\n- 72 =\tNorthwest Atlantic Ocean\n- 70 =\tSoutheast Atlantic Ocean\n- 71 =\tSouthwest Atlantic Ocean\n- 75 =\tE. Coast USA and Canada, St Pierre and Miquelon\n- 76 =\tGulf of Mexico\n- 74 =\tCaribbean Sea and Bermuda\n- 40 =\tBlack Sea and Caspian Sea\n- 50 =\tMediterranean Sea\n- 30 =\tRed Sea and Persian Gulf\n- 60 =\tIndian Ocean (including west coast of Australia)\n- 87 =\tAlaska (including Aleutian Islands)\n- 84 =\tChina, North and South Korea, Philippines, Taiwan\n- 81 =\tE Coast Australia, New Zealand, South Pacific Is.\n- 80 =\tHawaii, Johnston Atoll, Midway I\n- 83 =\tE. Indonesia (Pacific Ocean) and Malaysia\n- 82 =\tNew Caledonia, New Guinea, Solomon Is., Vanuatu\n- 86 =\tKamchatka and Kuril Islands\n- 85 =\tJapan\n- 88 =\tWest Coast of North and Central America\n- 89 =\tWest Coast of South America    \n"})
  regionCode?: number;

  /**
   * Distance from source (km).
   * 
   * The distance from the tsunami event source to the runup location.
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The distance from the tsunami event source to the runup location."})
  distanceFromSource?: number;

  /**
   * Arrival day.
   * 
   * Valid values: 1-31 (where months apply)

The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 1-31 (where months apply)\n\nThe Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different.    \n"})
  arrivalDay?: number;

  /**
   * Arrival hour.
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  arrivalHour?: number;

  /**
   * Arrival minute.
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  arrivalMinute?: number;

  /**
   * Travel time (hours).
   * 
   * The travel time is the time in hours and minutes that it took the initial tsunami wave to travel from the source to the location of effects.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "The travel time is the time in hours and minutes that it took the initial tsunami wave to travel from the source to the location of effects."})
  travelTimeHours?: number;

  /**
   * Travel time (minutes).
   * 
   * The travel time is the time in hours and minutes that it took the initial tsunami wave to travel from the source to the location of effects.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "The travel time is the time in hours and minutes that it took the initial tsunami wave to travel from the source to the location of effects."})
  travelTimeMinutes?: number;

  /**
   * Water height (m).
   * 
   * The maximum water height above sea level in meters. See image and text below for more information. If the type of measurement is:

- Type 1: Water height - Eyewitness observation - the maximum elevation the wave.
- Type 2: Tide Gauge - half of the maximum height (minus the normal tide)of a tsunami wave recorded at the coast by a tide gauge. Also called the amplitude.
- Type 3: Deep Ocean Gauge - half of the maximum height (minus the normal tide) of a tsunami wave recorded in the open ocean by a seafloor bottom pressure recording system.
- Type 4: Water height (Post-tsunami survey measurement) - the maximum elevation the wave.
- Type 5: Runup Height (Post-tsunami survey measurement) - the maximum elevation the wave reaches at the maximum inundation.
- Type 8: Runup Height in Harbor (Post-tsunami survey measurement) - water height in the harbor.
- Type 10: Flow Depth (Post-tsunami survey measurement) depth of the water.
- Type 9: Splash mark (Post-tsunami survey measurement)
- Type 6: Atmospheric Wave - Tsunami-like phenomena generated by meteorological or atmospheric disturbances. These waves can be produced by atmospheric gravity waves, pressure jumps, frontal passages, squalls, gales, typhoons, hurricanes and other atmospheric sources. Meteotsunamis have the same temporal and spatial scales as tsunami waves and can similarly devastate coastal areas, especially in bays and inlets with strong amplification and well-defined resonant properties. Sometimes referred to as rissaga. The water height definition for an atmospheric wave depends on whether it was measured by a tide gauge (2), eyewitness (1), or field survey (4,5).
- Type 7: Seiche - A standing wave oscillating in a partially or fully enclosed body of water. It may be initiated by long period seismic waves (an earthquake), wind and water waves, or a tsunami. The water height definition for a seiche depends on whether it was measured by a tide gauge (2), eyewitness (1), or field survey (4,5).

![Tsunami hydrodynamic data terminology](https://www.ngdc.noaa.gov/hazard/img/IOC_37_figV3.jpg)

Figure V.3. Tsunami hydrodynamic data terminology. From the UNESCO-IOC Post Tsunami Survey Field Guide, 2nd edition, IOC Manuals and Guides No. 37, p. 48:

A number of terms are used to describe the overland flow of the tsunami (Figure V.3). It is essential to use the appropriate term for the types of measurements used. Important quantities include the tsunami flow depth (code 10), tsunami height (code 4), the runup height (code 5) and the inundation distance. Runup is the maximum ground elevation wetted by the tsunami on a sloping shoreline. In the simplest case, the runup value is recorded at the maximum inundation distance - the horizontal distance flooded by the wave. Flow depth is the depth of the tsunami flood over the local terrain height while the tsunami height is the total elevation of the water free surface above a reference datum. In some cases where the ground topography is flat, large tsunamis can penetrate for hundreds of metres, and several kilometres inland. In such cases it may not be practical to quantitatively measure inundation distances to the furthest inland extent. In such cases, it is most useful to estimate the tsunami height and flow depths close to the shoreline and as far inland as the conditions and circumstances allow.    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The maximum water height above sea level in meters. See image and text below for more information. If the type of measurement is:\n\n- Type 1: Water height - Eyewitness observation - the maximum elevation the wave.\n- Type 2: Tide Gauge - half of the maximum height (minus the normal tide)of a tsunami wave recorded at the coast by a tide gauge. Also called the amplitude.\n- Type 3: Deep Ocean Gauge - half of the maximum height (minus the normal tide) of a tsunami wave recorded in the open ocean by a seafloor bottom pressure recording system.\n- Type 4: Water height (Post-tsunami survey measurement) - the maximum elevation the wave.\n- Type 5: Runup Height (Post-tsunami survey measurement) - the maximum elevation the wave reaches at the maximum inundation.\n- Type 8: Runup Height in Harbor (Post-tsunami survey measurement) - water height in the harbor.\n- Type 10: Flow Depth (Post-tsunami survey measurement) depth of the water.\n- Type 9: Splash mark (Post-tsunami survey measurement)\n- Type 6: Atmospheric Wave - Tsunami-like phenomena generated by meteorological or atmospheric disturbances. These waves can be produced by atmospheric gravity waves, pressure jumps, frontal passages, squalls, gales, typhoons, hurricanes and other atmospheric sources. Meteotsunamis have the same temporal and spatial scales as tsunami waves and can similarly devastate coastal areas, especially in bays and inlets with strong amplification and well-defined resonant properties. Sometimes referred to as rissaga. The water height definition for an atmospheric wave depends on whether it was measured by a tide gauge (2), eyewitness (1), or field survey (4,5).\n- Type 7: Seiche - A standing wave oscillating in a partially or fully enclosed body of water. It may be initiated by long period seismic waves (an earthquake), wind and water waves, or a tsunami. The water height definition for a seiche depends on whether it was measured by a tide gauge (2), eyewitness (1), or field survey (4,5).\n\n![Tsunami hydrodynamic data terminology](https://www.ngdc.noaa.gov/hazard/img/IOC_37_figV3.jpg)\n\nFigure V.3. Tsunami hydrodynamic data terminology. From the UNESCO-IOC Post Tsunami Survey Field Guide, 2nd edition, IOC Manuals and Guides No. 37, p. 48:\n\nA number of terms are used to describe the overland flow of the tsunami (Figure V.3). It is essential to use the appropriate term for the types of measurements used. Important quantities include the tsunami flow depth (code 10), tsunami height (code 4), the runup height (code 5) and the inundation distance. Runup is the maximum ground elevation wetted by the tsunami on a sloping shoreline. In the simplest case, the runup value is recorded at the maximum inundation distance - the horizontal distance flooded by the wave. Flow depth is the depth of the tsunami flood over the local terrain height while the tsunami height is the total elevation of the water free surface above a reference datum. In some cases where the ground topography is flat, large tsunamis can penetrate for hundreds of metres, and several kilometres inland. In such cases it may not be practical to quantitatively measure inundation distances to the furthest inland extent. In such cases, it is most useful to estimate the tsunami height and flow depths close to the shoreline and as far inland as the conditions and circumstances allow.    \n"})
  waterHeight?: number;

  /**
   * Horizontal inundation (m).
   * 
   * The maximum horizontal distance of inland flooding (in meters)
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The maximum horizontal distance of inland flooding (in meters)"})
  horizontalInundation?: number;

  /**
   * Type of measurement.
   * 
   * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

See image and text below for more information.

- 1 = Eyewitness measurement
- 5 = Runup Height, Post-tsunami survey measurement
- 4 = Water height, Post-tsunami survey measurement
- 8 = Water height in harbor, Post-tsunami survey measurement
- 10 = Flow Depth, Post-tsunami survey measurement
- 9 = Splash mark, Post-tsunami survey measurement
- 2 = Tide-gauge measurement
- 3 = Deep ocean gauge
- 6 = Atmospheric Wave
- 7 = Seiche

![Tsunami hydrodynamic data terminology](https://www.ngdc.noaa.gov/hazard/img/IOC_37_figV3.jpg)

Figure V.3. Tsunami hydrodynamic data terminology. From the UNESCO-IOC Post Tsunami Survey Field Guide, 2nd edition, IOC Manuals and Guides No. 37, p. 48:

A number of terms are used to describe the overland flow of the tsunami (Figure V.3). It is essential to use the appropriate term for the types of measurements used. Important quantities include the tsunami flow depth (code 10), tsunami height (code 4), the runup height (code 5) and the inundation distance. Runup is the maximum ground elevation wetted by the tsunami on a sloping shoreline. In the simplest case, the runup value is recorded at the maximum inundation distance - the horizontal distance flooded by the wave. Flow depth is the depth of the tsunami flood over the local terrain height while the tsunami height is the total elevation of the water free surface above a reference datum. In some cases where the ground topography is flat, large tsunamis can penetrate for hundreds of metres, and several kilometres inland. In such cases it may not be practical to quantitatively measure inundation distances to the furthest inland extent. In such cases, it is most useful to estimate the tsunami height and flow depths close to the shoreline and as far inland as the conditions and circumstances allow.

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\n\nSee image and text below for more information.\n\n- 1 = Eyewitness measurement\n- 5 = Runup Height, Post-tsunami survey measurement\n- 4 = Water height, Post-tsunami survey measurement\n- 8 = Water height in harbor, Post-tsunami survey measurement\n- 10 = Flow Depth, Post-tsunami survey measurement\n- 9 = Splash mark, Post-tsunami survey measurement\n- 2 = Tide-gauge measurement\n- 3 = Deep ocean gauge\n- 6 = Atmospheric Wave\n- 7 = Seiche\n\n![Tsunami hydrodynamic data terminology](https://www.ngdc.noaa.gov/hazard/img/IOC_37_figV3.jpg)\n\nFigure V.3. Tsunami hydrodynamic data terminology. From the UNESCO-IOC Post Tsunami Survey Field Guide, 2nd edition, IOC Manuals and Guides No. 37, p. 48:\n\nA number of terms are used to describe the overland flow of the tsunami (Figure V.3). It is essential to use the appropriate term for the types of measurements used. Important quantities include the tsunami flow depth (code 10), tsunami height (code 4), the runup height (code 5) and the inundation distance. Runup is the maximum ground elevation wetted by the tsunami on a sloping shoreline. In the simplest case, the runup value is recorded at the maximum inundation distance - the horizontal distance flooded by the wave. Flow depth is the depth of the tsunami flood over the local terrain height while the tsunami height is the total elevation of the water free surface above a reference datum. In some cases where the ground topography is flat, large tsunamis can penetrate for hundreds of metres, and several kilometres inland. In such cases it may not be practical to quantitatively measure inundation distances to the furthest inland extent. In such cases, it is most useful to estimate the tsunami height and flow depths close to the shoreline and as far inland as the conditions and circumstances allow.\n"})
  typeOfMeasurement?: number;

  /**
   * Period (minutes).
   * 
   * The period is in minutes and, when available, is the period of the first cycle.
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The period is in minutes and, when available, is the period of the first cycle."})
  period?: number;

  /**
   * First motion.
   * 
   * The first motion of the wave whether rise or fall.

- R = Rise
- F = Fall    

  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The first motion of the wave whether rise or fall.\n\n- R = Rise\n- F = Fall    \n"})
  firstMotion?: string;

  /**
   * Number of deaths at the runup location.
   * 
   * Deaths from the tsunami at the specific runup location.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Deaths from the tsunami at the specific runup location."})
  deaths?: number;

  /**
   * Description of deaths from the tsunami at the runup location.
   * 
   * Valid values: 0 to 4

When a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 deaths)
- 2 = Some (~51 to 100 deaths)
- 3 = Many (~101 to 1000 deaths)
- 4 = Very Many (~1001 or more deaths)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nWhen a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 deaths)\n- 2 = Some (~51 to 100 deaths)\n- 3 = Many (~101 to 1000 deaths)\n- 4 = Very Many (~1001 or more deaths)    \n"})
  deathsDescription?: number;

  /**
   * Injuries.
   * 
   * Whenever possible, numbers of injuries from the tsunami at the specific runup location are listed; may also include injuries from the earthquake that triggered the tsunami.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, numbers of injuries from the tsunami at the specific runup location are listed; may also include injuries from the earthquake that triggered the tsunami."})
  injuries?: number;

  /**
   * Injuries description.
   * 
   * Valid values: 0 to 4

When a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries De column. If the actual number of injuries was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 injuries)
- 2 = Some(~51 to 100 injuries)
- 3 = Many (~101 to 1000 injuries)
- 4 = Very Many (~1001 or more injuries)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nWhen a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries De column. If the actual number of injuries was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 injuries)\n- 2 = Some(~51 to 100 injuries)\n- 3 = Many (~101 to 1000 injuries)\n- 4 = Very Many (~1001 or more injuries)    \n"})
  injuriesDescription?: number;

  /**
   * Damage.
   * 
   * The value in the Damage column should be multipled by 1,000,000 to obtain the actual dollar amount.

When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values today, please use the Consumer Price Index Calculator. Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The value in the Damage column should be multipled by 1,000,000 to obtain the actual dollar amount.\n\nWhen a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values today, please use the Consumer Price Index Calculator. Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.    \n"})
  damageMillionsDollars?: number;

  /**
   * Damage description.
   * 
   * Description of Damage from the Tsunami at the Runup Location:
For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.

- 0 = NONE
- 1 = LIMITED (roughly corresponding to less than $1 million)
- 2 = MODERATE (~$1 to $5 million)
- 3 = SEVERE (~>$5 to $24 million)
- 4 = EXTREME (~$25 million or more)

When possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.

Note: The descriptive terms relate approximately to current dollar values.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Description of Damage from the Tsunami at the Runup Location:\nFor those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.\n\n- 0 = NONE\n- 1 = LIMITED (roughly corresponding to less than $1 million)\n- 2 = MODERATE (~$1 to $5 million)\n- 3 = SEVERE (~>$5 to $24 million)\n- 4 = EXTREME (~$25 million or more)\n\nWhen possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n\nNote: The descriptive terms relate approximately to current dollar values.    \n"})
  damageDescription?: number;

  /**
   * Houses damaged.
   * 
   * Number of Houses Damaged:
Valid values: 0 to

Whenever possible, number of houses damaged by the tsunami at the specific runup location are listed; may also include houses damaged by the earthquake that triggered the tsunami.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Number of Houses Damaged:\nValid values: 0 to\n\nWhenever possible, number of houses damaged by the tsunami at the specific runup location are listed; may also include houses damaged by the earthquake that triggered the tsunami.    \n"})
  housesDamaged?: number;

  /**
   * Houses damaged description.
   * 
   * Description of Houses Damaged by the Tsunami at the Runup Location:
  Valid values: 0 to 4
  
  For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.
  
  0 = None
  1 = Few (~1 to 50 houses)
  2 = Some (~51 to 100 houses)
  3 = Many (~101 to 1000 houses)
  4 = Very Many (~1001 or more houses)      

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Description of Houses Damaged by the Tsunami at the Runup Location:\n  Valid values: 0 to 4\n  \n  For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.\n  \n  0 = None\n  1 = Few (~1 to 50 houses)\n  2 = Some (~51 to 100 houses)\n  3 = Many (~101 to 1000 houses)\n  4 = Very Many (~1001 or more houses)      \n"})
  housesDamagedDescription?: number;

  /**
   * Houses destroyed.
   * 
   * Whenever possible, number of houses destroyed by the tsunami at the specific runup location are listed; may also include houses destroyed by the earthquake that triggered the tsunami.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, number of houses destroyed by the tsunami at the specific runup location are listed; may also include houses destroyed by the earthquake that triggered the tsunami."})
  housesDestroyed?: number;

  /**
   * Houses destroyed description.
   * 
   * Description of Houses Destroyed by the Tsunami at the Runup Location:
Valid values: 0 to 4

For those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 houses)
- 2 = Some (~51 to 100 houses)
- 3 = Many (~101 to 1000 houses)
- 4 = Very Many (~1001 or more houses)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Description of Houses Destroyed by the Tsunami at the Runup Location:\nValid values: 0 to 4\n\nFor those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 houses)\n- 2 = Some (~51 to 100 houses)\n- 3 = Many (~101 to 1000 houses)\n- 4 = Very Many (~1001 or more houses)    \n"})
  housesDestroyedDescription?: number;


}
