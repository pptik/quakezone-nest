import { ObjectType, ID, Field, Float, Int,} from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { modelOptions, prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Node } from '../nestjs-graphql-relay';
import { GeoPoint } from '../geopoint';

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
@modelOptions({schemaOptions: {collection: 'tsunamiSource'}})
@ObjectType({implements: Node,
  description: "Information on the source of the tsunami.\n\n### Information Sources\n\n1. `noaa`: [NOAA NGDC/WDS](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)\n\n### Variable Definitions for the Tsunami Source Events\n\n- ID\n- Date: Year, Month, Day, Hour, Minute, Second\n- Location: Latitude, Longitude, Location Name, State, Country, Region Code\n- Cause Code for the Tsunami\n- If the tsunami source was an Earthquake:\n  - Focal Depth,\n  - Primary Magnitude\n- Tsunami Source Event Measurements:\n  - Tsunami Event Validity\n  - Maximum Water Height\n  - Tsunami Magnitudes: Abe, Iida-Imamura\n  - Tsunami Intensity: Soloviev\n  - Tsunami Warning Status\n- Tsunami Effects:\n  - Number of Deaths, Deaths Description:\n  - Number of Missing, Missing Description\n  - Number of Injuries, Injuries Description\n  - Damage Millions Dollars, Damage Description\n  - Number of Houses Destroyed, Houses Destroyed Description\n  - Number of Houses Damaged, Houses Damaged Description\n- Tsunami and Source Event Total Effects:\n  - Total Number of Deaths, Total Deaths Description\n  - Total Number of Missing, Total Missing Description\n  - Total Number of Injuries, Total Injuries Description\n  - Total Damage in Millions Dollars Total Damage Description\n  - Total Number of Houses Destroyed, Total Houses Destroyed Description\n  - Total Number of Houses Damaged, Total Houses Damaged Description\n"
})
export class TsunamiSource extends Node {  
  @prop({alias: 'id'})
  _id?: ObjectId;

  @Field(() => ID, {nullable: false})
  id?: string;



  /**
   * Year.
   * 
   * Year of tsunami source event
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Year of tsunami source event"})
  year?: number;

  /**
   * Month.
   * 
   * Month of tsunami source event
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Month of tsunami source event"})
  month?: number;

  /**
   * Day.
   * 
   * Day of tsunami source event
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Day of tsunami source event"})
  day?: number;

  /**
   * Hour.
   * 
   * Hour of tsunami source event
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Hour of tsunami source event"})
  hour?: number;

  /**
   * Minute.
   * 
   * Minute of tsunami source event
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Minute of tsunami source event"})
  minute?: number;

  /**
   * Second.
   * 
   * Second of tsunami source event
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Second of tsunami source event"})
  second?: number;

  /**
   * Event validity.
   * 
   * Valid values: -1 to 4

Validity of the actual tsunami occurrence is indicated by a numerical rating of the reports of that event:

- 4 = definite tsunami
- 3 = probable tsunami
- 2 = questionable tsunami
- 1 = very doubtful tsunami
- 0 = event that only caused a seiche or disturbance in an inland river
- -1 = erroneous entry

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: -1 to 4\n\nValidity of the actual tsunami occurrence is indicated by a numerical rating of the reports of that event:\n\n- 4 = definite tsunami\n- 3 = probable tsunami\n- 2 = questionable tsunami\n- 1 = very doubtful tsunami\n- 0 = event that only caused a seiche or disturbance in an inland river\n- -1 = erroneous entry\n"})
  eventValidity?: number;

  /**
   * Tsunami source.
   * 
   * Valid values: 0 to 11

The source of the tsunami:

- 0 = Unknown
- 1 = Earthquake
- 2 = Questionable Earthquake
- 3 = Earthquake and Landslide
- 4 = Volcano and Earthquake
- 5 = Volcano, Earthquake, and Landslide
- 6 = Volcano
- 7 = Volcano and Landslide
- 8 = Landslide
- 9 = Meteorological
- 10 = Explosion
- 11 = Astronomical Tide    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 11\n\nThe source of the tsunami:\n\n- 0 = Unknown\n- 1 = Earthquake\n- 2 = Questionable Earthquake\n- 3 = Earthquake and Landslide\n- 4 = Volcano and Earthquake\n- 5 = Volcano, Earthquake, and Landslide\n- 6 = Volcano\n- 7 = Volcano and Landslide\n- 8 = Landslide\n- 9 = Meteorological\n- 10 = Explosion\n- 11 = Astronomical Tide    \n"})
  causeCode?: number;

  /**
   * Focal depth (km).
   * 
   * Valid values: 0 to 700 km. The depth of the earthquake is given in kilometers.    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: 0 to 700 km. The depth of the earthquake is given in kilometers.    \n"})
  focalDepth?: number;

  /**
   * Primary magnitude.
   * 
   * Valid values: 0.0 to 9.9

The value in this column contains the primary earthquake magnitude. Magnitude measures the energy released at the source of the earthquake. Magnitude is determined from measurements on seismographs. For pre-instrumental events, the magnitudes are derived from intensities. There are several different scales for measuring earthquake magnitudes. The primary magnitude is chosen from the available magnitude scales in this order:

- Mw Magnitude
- Ms Magnitude
- Mb Magnitude
- Ml Magnitude
- Mfa Magnitude
- Unknown Magnitude    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: 0.0 to 9.9\n\nThe value in this column contains the primary earthquake magnitude. Magnitude measures the energy released at the source of the earthquake. Magnitude is determined from measurements on seismographs. For pre-instrumental events, the magnitudes are derived from intensities. There are several different scales for measuring earthquake magnitudes. The primary magnitude is chosen from the available magnitude scales in this order:\n\n- Mw Magnitude\n- Ms Magnitude\n- Mb Magnitude\n- Ml Magnitude\n- Mfa Magnitude\n- Unknown Magnitude    \n"})
  primaryMagnitude?: number;

  /**
   * Country.
   * 
   * The Country where the tsunami source occurred (For example enter: Japan or Russia)    

  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The Country where the tsunami source occurred (For example enter: Japan or Russia)    \n"})
  country?: string;

  /**
   * State.
   * 
   * The two-letter State or Province abbreviation where the Earthquake occurred.
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The two-letter State or Province abbreviation where the Earthquake occurred."})
  state?: string;

  /**
   * Location.
   * 
   * The Country, State, Province or Island where the tsunami source occurred (For example enter: Japan or Honshu)

This is only an approximate geographic location. Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred. If there are different spellings of a city name the additional names are in parentheses.    

  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "The Country, State, Province or Island where the tsunami source occurred (For example enter: Japan or Honshu)\n\nThis is only an approximate geographic location. Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred. If there are different spellings of a city name the additional names are in parentheses.    \n"})
  locationName?: string;

  /**
   * Latitude.
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  latitude?: number;

  /**
   * Longitude.
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
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
- 74 =	Caribbean Sea
- 40 =	Black Sea and Caspian Sea
- 50 =	Mediterranean Sea
- 30 =	Red Sea and Persian Gulf
- 60 =	Indian Ocean (including west coast of Australia)
- 87 =	Alaska (including Aleutian Islands)
- 84 =	China, North and South Korea, Philippines, Taiwan
- 81 =	E. Coast Australia, New Zealand, South Pacific Is.
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
    description: "Regional boundaries are based on frequency of occurrence of tsunamigenic events, geophysical relations, risk in distant areas and political justification.\n\n- 77 =\tWest Coast of Africa\n- 78 =\tCentral Africa\n- 73 =\tNortheast Atlantic Ocean\n- 72 =\tNorthwest Atlantic Ocean\n- 70 =\tSoutheast Atlantic Ocean\n- 71 =\tSouthwest Atlantic Ocean\n- 75 =\tE. Coast USA and Canada, St Pierre and Miquelon\n- 76 =\tGulf of Mexico\n- 74 =\tCaribbean Sea\n- 40 =\tBlack Sea and Caspian Sea\n- 50 =\tMediterranean Sea\n- 30 =\tRed Sea and Persian Gulf\n- 60 =\tIndian Ocean (including west coast of Australia)\n- 87 =\tAlaska (including Aleutian Islands)\n- 84 =\tChina, North and South Korea, Philippines, Taiwan\n- 81 =\tE. Coast Australia, New Zealand, South Pacific Is.\n- 80 =\tHawaii, Johnston Atoll, Midway I\n- 83 =\tE. Indonesia (Pacific Ocean) and Malaysia\n- 82 =\tNew Caledonia, New Guinea, Solomon Is., Vanuatu\n- 86 =\tKamchatka and Kuril Islands\n- 85 =\tJapan\n- 88 =\tWest Coast of North and Central America\n- 89 =\tWest Coast of South America    \n"})
  regionCode?: number;

  /**
   * Max. water height.
   * 
   * The maximum water height above sea level in meters for this event. If the type of measurement of the runup was a:

- Tide Gauge - half of the maximum height (minus the normal tide)of a tsunami wave recorded at the coast by a tide gauge.
- Runup Height - the maximum elevation the wave reaches at the maximum inundation.

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The maximum water height above sea level in meters for this event. If the type of measurement of the runup was a:\n\n- Tide Gauge - half of the maximum height (minus the normal tide)of a tsunami wave recorded at the coast by a tide gauge.\n- Runup Height - the maximum elevation the wave reaches at the maximum inundation.\n"})
  maxWaterHeight?: number;

  /**
   * Tsunami magnitude (Abe).
   * 
   * Valid values: -5 to 10
Abe defined two different tsunami magnitude amplitudes. His first tsunami magnitude (1979) is:

Mt = logH + B

where H is the maximum single crest or trough amplitude of the tsunami waves (in meters) and B a constant. The second definition (1981) is:

Mt = logH + alogR + D

where R is the distance in km from the earthquake epicenter to the tide station along the shortest oceanic path, and a and D are constants.    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: -5 to 10\nAbe defined two different tsunami magnitude amplitudes. His first tsunami magnitude (1979) is:\n\nMt = logH + B\n\nwhere H is the maximum single crest or trough amplitude of the tsunami waves (in meters) and B a constant. The second definition (1981) is:\n\nMt = logH + alogR + D\n\nwhere R is the distance in km from the earthquake epicenter to the tide station along the shortest oceanic path, and a and D are constants.    \n"})
  tsunamiMagnitudeAbe?: number;

  /**
   * Tsunami magnitude (Iida-Imamura).
   * 
   * Valid values: -5 to 10
Tsunami magnitude (M) is defined by Iida and others (1967) as

M = log2h, where "h" is the maximum runup height of the wave.

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: -5 to 10\nTsunami magnitude (M) is defined by Iida and others (1967) as\n\nM = log2h, where \"h\" is the maximum runup height of the wave.\n"})
  tsunamiMagnitudeIida?: number;

  /**
   * Tsunami intensity (Soloviev).
   * 
   * Valid values: -5 to 10
Tsunami intensity is defined by Soloviev and Go (1974) as

I = log2(21/2 * h), where "h" is the maximum runup height of the wave.   

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: -5 to 10\nTsunami intensity is defined by Soloviev and Go (1974) as\n\nI = log2(21/2 * h), where \"h\" is the maximum runup height of the wave.   \n"})
  tsunamiIntensitySoloviev?: number;

  /**
   * Warning status.
   * 
   * Valid values: -1 to 4
Warning Status of the Tsunami:

- -1=Status unknown
- 0=no warning issued
- 1=PTW - Pacific-wide Tsunami Warning issued by PTWC
- 2=RTW - Regional Tsunami Warning issued by PTWC for areas having no TWS
- 3=LTW - Local Tsunami Warning issued by regional or national TWC
- 4=TIB - Tsunami Information or Attention Bulletin issued by any agency    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "Valid values: -1 to 4\nWarning Status of the Tsunami:\n\n- -1=Status unknown\n- 0=no warning issued\n- 1=PTW - Pacific-wide Tsunami Warning issued by PTWC\n- 2=RTW - Regional Tsunami Warning issued by PTWC for areas having no TWS\n- 3=LTW - Local Tsunami Warning issued by regional or national TWC\n- 4=TIB - Tsunami Information or Attention Bulletin issued by any agency    \n"})
  warningStatus?: number;

  /**
   * Number of deaths from the tsunami.
   * 
   * If an actual number of deaths due to the tsunami is known, enter a number in this search field. If only a description is available such as "few", "some", or "many", the database can be searched using the search field: Death Description    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "If an actual number of deaths due to the tsunami is known, enter a number in this search field. If only a description is available such as \"few\", \"some\", or \"many\", the database can be searched using the search field: Death Description    \n"})
  deaths?: number;

  /**
   * Description of deaths from the tsunami.
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
    description: "Valid values: 0 to 4\nWhen a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 deaths)\n- 2 = Some (~51 to 100 deaths)\n- 3 = Many (~101 to 1000 deaths)\n- 4 = Very Many (~1001 or more deaths)\n"})
  deathsDescription?: number;

  /**
   * Number of missing from the tsunami.
   * 
   * Whenever possible, numbers of Missing from the tsunami are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, numbers of Missing from the tsunami are listed."})
  missing?: number;

  /**
   * Description of missing from the tsunami.
   * 
   * Valid values: 0 to 4

When a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing De column. If the actual number of missing was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 missing)
- 2 = Some(~51 to 100 missing)
- 3 = Many (~101 to 1000 missing)
- 4 = Very Many (~1001 or more missing)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nWhen a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing De column. If the actual number of missing was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 missing)\n- 2 = Some(~51 to 100 missing)\n- 3 = Many (~101 to 1000 missing)\n- 4 = Very Many (~1001 or more missing)    \n"})
  missingDescription?: number;

  /**
   * Number of injuries from the tsunami.
   * 
   * Whenever possible, numbers of injuries from the tsunami are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, numbers of injuries from the tsunami are listed."})
  injuries?: number;

  /**
   * Description of injuries from the tsunami.
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
   * Damage (millions of US Dollars) from the tsunami.
   * 
   * The value in the Damage column should be multiplied by 1,000,000 to obtain the actual dollar amount.

If an actual number of dollars in damage due to the tsunami is known, enter a number in this search field. If only a description is available such as "limited", "moderate", or "severe", the database can be searched using the search field:Damage Description

When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the [Consumer Price Index Calculator](https://www.ngdc.noaa.gov/nndc/DescribeField.jsp?dataset=101650&search_look=77&field_name=tsevent_vsqp.DAMAGE_MILLIONS_DOLLARS). Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.  

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The value in the Damage column should be multiplied by 1,000,000 to obtain the actual dollar amount.\n\nIf an actual number of dollars in damage due to the tsunami is known, enter a number in this search field. If only a description is available such as \"limited\", \"moderate\", or \"severe\", the database can be searched using the search field:Damage Description\n\nWhen a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the [Consumer Price Index Calculator](https://www.ngdc.noaa.gov/nndc/DescribeField.jsp?dataset=101650&search_look=77&field_name=tsevent_vsqp.DAMAGE_MILLIONS_DOLLARS). Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.  \n"})
  damageMillionsDollars?: number;

  /**
   * Description of damage from the tsunami.
   * 
   * Valid values: 0 to 4

For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage Description column. If the **actual dollar amount of damage was listed**, a descriptor was also added for search purposes.

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
    description: "Valid values: 0 to 4\n\nFor those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage Description column. If the **actual dollar amount of damage was listed**, a descriptor was also added for search purposes.\n\n- 0 = NONE\n- 1 = LIMITED (roughly corresponding to less than $1 million)\n- 2 = MODERATE (~$1 to $5 million)\n- 3 = SEVERE (~>$5 to $24 million)\n- 4 = EXTREME (~$25 million or more)\n\nWhen possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n\nNote: The descriptive terms relate approximately to current dollar values.    \n"})
  damageDescription?: number;

  /**
   * Number of houses destroyed by the tsunami.
   * 
   * Whenever possible, number of houses destroyed by the tsunami are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, number of houses destroyed by the tsunami are listed."})
  housesDestroyed?: number;

  /**
   * Description of houses destroyed by the tsunami.
   * 
   * Valid values: 0 to 4

For those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 houses)
- 2 = Some (~51 to 100 houses)
- 3 = Many (~101 to 1000 houses)
- 4 = Very Many (~1001 or more houses)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nFor those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 houses)\n- 2 = Some (~51 to 100 houses)\n- 3 = Many (~101 to 1000 houses)\n- 4 = Very Many (~1001 or more houses)    \n"})
  housesDestroyedDescription?: number;

  /**
   * Number of houses damaged by the tsunami.
   * 
   * Whenever possible, number of houses damaged by the tsunami are listed.    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, number of houses damaged by the tsunami are listed.    \n"})
  housesDamaged?: number;

  /**
   * Description of houses damaged by the tsunami.
   * 
   * Valid values: 0 to 4

For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 houses)
- 2 = Some (~51 to 100 houses)
- 3 = Many (~101 to 1000 houses)
- 4 = Very Many (~1001 or more houses)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nFor those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 houses)\n- 2 = Some (~51 to 100 houses)\n- 3 = Many (~101 to 1000 houses)\n- 4 = Very Many (~1001 or more houses)    \n"})
  housesDamagedDescription?: number;

  /**
   * Total number of deaths from the tsunami and source event.
   * 
   * Whenever possible, numbers of deaths from the tsunami and source event are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, numbers of deaths from the tsunami and source event are listed."})
  totalDeaths?: number;

  /**
   * Description of deaths from the tsunami and the source event.
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
    description: "Valid values: 0 to 4\n\nWhen a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 deaths)\n- 2 = Some (~51 to 100 deaths)\n- 3 = Many (~101 to 1000 deaths)\n- 4 = Very Many (~1001 or more deaths)\n"})
  totalDeathsDescription?: number;

  /**
   * Total number of missing from the tsunami and the source event.
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  totalMissing?: number;

  /**
   * Description of missing from the tsunami and the source event.
   * 
   * Valid values: 0 to 4

When a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing Description column. If the actual number of missing was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 missing)
- 2 = Some(~51 to 100 missing)
- 3 = Many (~101 to 1000 missing)
- 4 = Very Many (~1001 or more missing)

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nWhen a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing Description column. If the actual number of missing was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 missing)\n- 2 = Some(~51 to 100 missing)\n- 3 = Many (~101 to 1000 missing)\n- 4 = Very Many (~1001 or more missing)\n"})
  totalMissingDescription?: number;

  /**
   * Total Number of injuries from the tsunami and the source event.
   * 
   * Whenever possible, numbers of injuries from the tsunami and source event are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, numbers of injuries from the tsunami and source event are listed."})
  totalInjuries?: number;

  /**
   * Description of injuries from the tsunami and the source event.
   * 
   * Valid values: 0 to 4

When a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries De column. If the actual number of injuries was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 injuries)
- 2 = Some(~51 to 100 injuries)
- 3 = Many (~101 to 1000 injuries))
- 4 = Very Many (~1001 or more injuries)

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nWhen a description was found in the historical literature instead of an actual number of injuries, this value was coded and listed in the Injuries De column. If the actual number of injuries was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 injuries)\n- 2 = Some(~51 to 100 injuries)\n- 3 = Many (~101 to 1000 injuries))\n- 4 = Very Many (~1001 or more injuries)\n"})
  totalInjuriesDescription?: number;

  /**
   * Total damage in millions of dollars from the tsunami and the source event.
   * 
   * The value in the Damage column should be multipled by 1,000,000 to obtain the actual dollar amount.

When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the [Consumer Price Index Calculator](https://www.ngdc.noaa.gov/nndc/DescribeField.jsp?dataset=101650&search_look=77&field_name=tsevent_vsqp.DAMAGE_MILLIONS_DOLLARS_TOTAL). Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.    

  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: "The value in the Damage column should be multipled by 1,000,000 to obtain the actual dollar amount.\n\nWhen a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the [Consumer Price Index Calculator](https://www.ngdc.noaa.gov/nndc/DescribeField.jsp?dataset=101650&search_look=77&field_name=tsevent_vsqp.DAMAGE_MILLIONS_DOLLARS_TOTAL). Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.    \n"})
  totalDamageMillionsDollars?: number;

  /**
   * Description of damage from the tsunami and the source event.
   * 
   * Valid values: 0 to 4

For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.

- 0 = NONE
- 1 = LIMITED (roughly corresponding to less than $1 million)
- 2 = MODERATE (~$1 to $5 million)
- 3 = SEVERE (~$5 to $25 million)
- 4 = EXTREME (~$25 million or more)

When possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.

Note: The descriptive terms relate approximately to current dollar values.

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nFor those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.\n\n- 0 = NONE\n- 1 = LIMITED (roughly corresponding to less than $1 million)\n- 2 = MODERATE (~$1 to $5 million)\n- 3 = SEVERE (~$5 to $25 million)\n- 4 = EXTREME (~$25 million or more)\n\nWhen possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n\nNote: The descriptive terms relate approximately to current dollar values.\n"})
  totalDamageMillionsDollarsDescription?: number;

  /**
   * Total number of houses destroyed.
   * 
   * Whenever possible, number of houses destroyed by the tsunami and the source event are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, number of houses destroyed by the tsunami and the source event are listed."})
  totalHousesDestroyed?: number;

  /**
   * Total houses destroyed description.
   * 
   * Valid values: 0 to 4

For those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 houses)
- 2 = Some (~51 to 100 houses)
- 3 = Many (~101 to 1000 houses)
- 4 = Very Many (~1001 or more houses)

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nFor those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 houses)\n- 2 = Some (~51 to 100 houses)\n- 3 = Many (~101 to 1000 houses)\n- 4 = Very Many (~1001 or more houses)\n"})
  totalHousesDestroyedDescription?: number;

  /**
   * Total number of houses damaged.
   * 
   * Whenever possible, number of houses damaged by the tsunami and the source event are listed.
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Whenever possible, number of houses damaged by the tsunami and the source event are listed."})
  totalHousesDamaged?: number;

  /**
   * Total houses damaged description.
   * 
   * Valid values: 0 to 4

For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the **Houses Damaged Description** column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.

- 0 = None
- 1 = Few (~1 to 50 houses)
- 2 = Some (~51 to 100 houses)
- 3 = Many (~101 to 1000 houses)
- 4 = Very Many (~1001 or more houses)    

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Valid values: 0 to 4\n\nFor those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the **Houses Damaged Description** column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.\n\n- 0 = None\n- 1 = Few (~1 to 50 houses)\n- 2 = Some (~51 to 100 houses)\n- 3 = Many (~101 to 1000 houses)\n- 4 = Very Many (~1001 or more houses)    \n"})
  totalHousesDamagedDescription?: number;

  /**
   * NOAA tsunami event ID.
   * 
   * Tsunami source event ID according to `noaa`: [NOAA NGDC/WDS](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml).

  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: "Tsunami source event ID according to `noaa`: [NOAA NGDC/WDS](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml).\n"})
  noaaTsunamiEventId?: number;

  /**
   * Information source.
   * 
   * 1. `noaa`: [NOAA NGDC/WDS](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)

  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: "1. `noaa`: [NOAA NGDC/WDS](https://www.ngdc.noaa.gov/hazard/tsu_db.shtml)\n"})
  infoSource?: string;


}
