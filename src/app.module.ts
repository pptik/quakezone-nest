import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypegooseModule } from "nestjs-typegoose";

import { Quake } from './entities/quake.entity';
import { TsunamiRunup } from './entities/tsunami-runup.entity';
import { TsunamiSource } from './entities/tsunami-source.entity';
import { QuakeService } from './quake.service';
import { TsunamiRunupService } from './tsunami-runup.service';
import { TsunamiSourceService } from './tsunami-source.service';
import { QuakeResolver } from './quake.resolver';
import { TsunamiRunupResolver } from './tsunami-runup.resolver';
import { TsunamiSourceResolver } from './tsunami-source.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => {
        if (!configService.get('MONGODB_URI')) {
          throw new Error('MONGODB_URI environment configuration is required');
        }
        if (!configService.get('MONGODB_DATABASE')) {
          throw new Error('MONGODB_DATABASE environment configuration is required');
        }
        return {
          uri: configService.get('MONGODB_URI'),
          dbName: configService.get('MONGODB_DATABASE'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true,
          useCreateIndex: true,
        };
      },
      inject: [ConfigService],
    }),
    TypegooseModule.forFeature([
            Quake, TsunamiRunup, TsunamiSource
    ]),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    })
  ],
  controllers: [AppController],
  providers: [AppService,
        QuakeService, TsunamiRunupService, TsunamiSourceService, 
    QuakeResolver, TsunamiRunupResolver, TsunamiSourceResolver, 
  ],
  exports: [
    QuakeService, TsunamiRunupService, TsunamiSourceService, 
  ]
})
export class AppModule {}
