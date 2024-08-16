import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { UsersModule } from './src/users/users.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UsersModule, UserModule],
=======
import { UserModule } from './user/user.module';
import { MatchesModule } from './matches/matches.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, MatchesModule],
>>>>>>> develop
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
