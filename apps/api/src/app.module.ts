import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as schema from './db/schema';
import { DrizzleTursoModule } from '@knaadh/nestjs-drizzle-turso';

@Module({
  imports: [
    DrizzleTursoModule.register({
      tag: 'DB_DEV',
      turso: {
        config: {
          url: process.env.TURSO_DATABASE_URL!,
          authToken: process.env.TURSO_AUTH_TOKEN!,
        },
      },
      config: { schema: { ...schema } },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
