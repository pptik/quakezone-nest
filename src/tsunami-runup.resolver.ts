import { Resolver, Query, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';
import { PageInfo, Aggregate } from './nestjs-graphql-relay';
import { Ordering } from './ordering';
import { TsunamiRunup } from './entities/tsunami-runup.entity';
import { TsunamiRunupService } from './tsunami-runup.service';

@ObjectType({isAbstract: true})
abstract class TsunamiRunupsEdge implements Relay.Edge<TsunamiRunup> {
  @Field(() => TsunamiRunup)
  readonly node!: TsunamiRunup;

  @Field()
  readonly cursor!: Relay.ConnectionCursor;
}

@ObjectType()
export class TsunamiRunupsConnection implements Relay.Connection<TsunamiRunup> {
  @Field()
  readonly pageInfo!: PageInfo;

  @Field(() => [TsunamiRunupsEdge])
  readonly edges!: Relay.Edge<TsunamiRunup>[];

  @Field(() => Aggregate, {nullable: true})
  readonly aggregate?: Aggregate;
}

@Resolver(() => TsunamiRunup)
export class TsunamiRunupResolver {
  constructor(
    private readonly tsunamiRunupService: TsunamiRunupService
  ) {}

  @Query(() => TsunamiRunup, {nullable: true})
  async tsunamiRunup(
    @Args('id', {type: () => ID}) id: string) {
    return await this.tsunamiRunupService.findOne(id);
  }

  @Query(() => TsunamiRunupsConnection)
  async tsunamiRunups(
    @Args('orderBy', {type: () => [Ordering], nullable: true}) orderBy: Ordering[] = [],
    @Args('first', {nullable: true}) first?: number,
    @Args('after', {nullable: true}) after?: string,
    @Args('last', {nullable: true}) last?: number,
    @Args('before', {nullable: true}) before?: string,
  ) {
    const edges = (await this.tsunamiRunupService.findAll({orderBy, first, after, last, before}))
      .map(_ => ({node: _, cursor: _.id} as TsunamiRunupsEdge));
    const startCursor = edges.length >= 1 ? edges[0].cursor : undefined;
    const endCursor = edges.length >= 1 ? edges[edges.length - 1].cursor : undefined;
    return {
      pageInfo: {hasPreviousPage: false, hasNextPage: false, startCursor, endCursor},
      edges};
  }

}
