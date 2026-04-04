import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './modules/gallery/gallery.module';
import { AuthModule } from './modules/auth/auth.module';
import { AboutModule } from './modules/about/about.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AboutModule } from './modules/about/about.module';
import { AuthModule } from './modules/auth/auth.module';
import { GalleryModule } from './modules/gallery/gallery.module';

@Module({
  imports: [GalleryModule, ProfileModule, AboutModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
