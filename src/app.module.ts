import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ActivityModule } from './modules/activity/activity.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    GalleryModule,
    ProfileModule,
    ActivityModule,
    PrismaModule,
  ],
})
export class AppModule {}
