import { ObjectType, ID, Field, Float, Int,} from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { modelOptions, prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Node } from '../nestjs-graphql-relay';
import { GeoPoint } from '../geopoint';

/**
 * Information on earthquakes.
 */
@modelOptions({schemaOptions: {collection: 'quake'}})
@ObjectType({implements: Node,
  description: "Information on earthquakes."
})
export class Quake extends Node {  
  @prop({alias: 'id'})
  _id?: ObjectId;

  @Field(() => ID, {nullable: false})
  id?: string;



  /**
   * name.
   * 
   * 
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: undefined})
  name?: string;

  /**
   * USGS ID.
   * 
   * 
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: undefined})
  usgsId?: string;

  /**
   * USGS name.
   * 
   * 
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: undefined})
  usgsName?: string;

  /**
   * Origin time.
   * 
   * 
  */ 
  @prop()
  @Field(() => Date, {nullable: true,
    description: undefined})
  originTime?: Date;

  /**
   * Origin time (USGS).
   * 
   * 
  */ 
  @prop()
  @Field(() => Date, {nullable: true,
    description: undefined})
  usgsOriginTime?: Date;

  /**
   * Origin time (IRIS).
   * 
   * 
  */ 
  @prop()
  @Field(() => Date, {nullable: true,
    description: undefined})
  irisOriginTime?: Date;

  /**
   * Location (NOAA).
   * 
   * 
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: undefined})
  noaaLocation?: string;

  /**
   * Rupture duration (Novianty).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  noviantyRuptureDuration?: number;

  /**
   * P-wave dominant period (Novianty).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  noviantyPWaveDominantPeriod?: number;

  /**
   * T0 × Td (Novianty).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  noviantyT0xtd?: number;

  /**
   * Mw (Novianty).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  noviantyMw?: number;

  /**
   * Mw.
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  mw?: number;

  /**
   * Mw (USGS).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  usgsMw?: number;

  /**
   * Mw (IRIS).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  irisMw?: number;

  /**
   * Tsunami potential (NOAA).
   * 
   * 
  */ 
  @prop()
  @Field(() => Boolean, {nullable: true,
    description: undefined})
  noaaTsunami?: boolean;

  /**
   * NOAA tsunami event ID.
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  noaaTsunamiEventId?: number;

  /**
   * Unknown 1.
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  unknown1?: number;

  /**
   * Depth (USGS).
   * 
   * 
  */ 
  @prop()
  @Field(() => Float, {nullable: true,
    description: undefined})
  usgsDepth?: number;

  /**
   * Collection name.
   * 
   * 
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: undefined})
  collectionName?: string;

  /**
   * Collection pos.
   * 
   * 
  */ 
  @prop()
  @Field(() => Int, {nullable: true,
    description: undefined})
  collectionPos?: number;

  /**
   * Epicenter (USGS).
   * 
   * 
  */ 
  @prop()
  @Field(() => GeoPoint, {nullable: true,
    description: undefined})
  usgsEpicenter?: GeoPoint;

  /**
   * Tsunami source ID.
   * 
   * 
  */ 
  @prop()
  @Field(() => String, {nullable: true,
    description: undefined})
  tsunamiSourceId?: string;


}
