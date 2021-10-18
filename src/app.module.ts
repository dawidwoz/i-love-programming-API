import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgrammersController } from './programmers/programmers.controller';
import { ProgrammerService } from './programmer/programmer.service';
import { ProgrammersModule } from './programmers/programmers.module';

@Module({
  imports: [ProgrammersModule],
  controllers: [AppController, ProgrammersController],
  providers: [AppService, ProgrammerService],
})
export class AppModule {}
