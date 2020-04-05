import { Resolver, Query, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { PageInfo, Aggregate } from './nestjs-graphql-relay';
import { Ordering } from './ordering';
import { TsunamiSource } from './entities/tsunami-source.entity';
import { TsunamiSourceService } from './tsunami-source.service';

@ObjectType({isAbstract: true})
abstract class TsunamiSourcesEdge implements Relay.Edge<TsunamiSource> {
  @Field(() => TsunamiSource)
  readonly node!: TsunamiSource;

  @Field()
  readonly cursor!: Relay.ConnectionCursor;
}

@ObjectType()
export class TsunamiSourcesConnection implements Relay.Connection<TsunamiSource> {
  @Field()
  readonly pageInfo!: PageInfo;

  @Field(() => [TsunamiSourcesEdge])
  readonly edges!: Relay.Edge<TsunamiSource>[];

  @Field(() => Aggregate, {nullable: true})
  readonly aggregate?: Aggregate;
}

@Resolver(() => TsunamiSource)
export class TsunamiSourceResolver {
  constructor(
    private readonly tsunamiSourceService: TsunamiSourceService
  ) {}

  @Query(() => TsunamiSource, {nullable: true})
  async tsunamiSource(
    @Args('id', {type: () => ID}) id: string) {
    return await this.tsunamiSourceService.findOne(id);
  }

  @Query(() => TsunamiSourcesConnection)
  async tsunamiSources(
    @Args('orderBy', {type: () => [Ordering], nullable: true}) orderBy: Ordering[] = [],
    @Args('first', {nullable: true}) first?: number,
    @Args('after', {nullable: true}) after?: string,
    @Args('last', {nullable: true}) last?: number,
    @Args('before', {nullable: true}) before?: string,
  ) {
    const edges = (await this.tsunamiSourceService.findAll({orderBy, first, after, last, before}))
      .map(_ => ({node: _, cursor: _.id} as TsunamiSourcesEdge));
    const startCursor = edges.length >= 1 ? edges[0].cursor : undefined;
    const endCursor = edges.length >= 1 ? edges[edges.length - 1].cursor : undefined;
    return {
      pageInfo: {hasPreviousPage: false, hasNextPage: false, startCursor, endCursor},
      edges};
  }

}
