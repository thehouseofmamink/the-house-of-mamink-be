import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ActivityModule } from './modules/activity/activity.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    GalleryModule,
    ProfileModule,
    ActivityModule,
    PrismaModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
