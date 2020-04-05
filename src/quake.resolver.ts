import { Resolver, Query, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { PageInfo, Aggregate } from './nestjs-graphql-relay';
import { Ordering } from './ordering';
import { Quake } from './entities/quake.entity';
import { QuakeService } from './quake.service';

@ObjectType({isAbstract: true})
abstract class QuakesEdge implements Relay.Edge<Quake> {
  @Field(() => Quake)
  readonly node!: Quake;

  @Field()
  readonly cursor!: Relay.ConnectionCursor;
}

@ObjectType()
export class QuakesConnection implements Relay.Connection<Quake> {
  @Field()
  readonly pageInfo!: PageInfo;

  @Field(() => [QuakesEdge])
  readonly edges!: Relay.Edge<Quake>[];

  @Field(() => Aggregate, {nullable: true})
  readonly aggregate?: Aggregate;
}

@Resolver(() => Quake)
export class QuakeResolver {
  constructor(
    private readonly quakeService: QuakeService
  ) {}

  @Query(() => Quake, {nullable: true})
  async quake(
    @Args('id', {type: () => ID}) id: string) {
    return await this.quakeService.findOne(id);
  }

  @Query(() => QuakesConnection)
  async quakes(
    @Args('orderBy', {type: () => [Ordering], nullable: true}) orderBy: Ordering[] = [],
    @Args('first', {nullable: true}) first?: number,
    @Args('after', {nullable: true}) after?: string,
    @Args('last', {nullable: true}) last?: number,
    @Args('before', {nullable: true}) before?: string,
  ) {
    const edges = (await this.quakeService.findAll({orderBy, first, after, last, before}))
      .map(_ => ({node: _, cursor: _.id} as QuakesEdge));
    const startCursor = edges.length >= 1 ? edges[0].cursor : undefined;
    const endCursor = edges.length >= 1 ? edges[edges.length - 1].cursor : undefined;
    return {
      pageInfo: {hasPreviousPage: false, hasNextPage: false, startCursor, endCursor},
      edges};
  }

}
