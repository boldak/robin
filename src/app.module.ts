import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
			installSubscriptionHandlers: true,
			debug: true,
      playground: true,
    }),
  ],
})
export class AppModule {}