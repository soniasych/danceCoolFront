import { UserService } from './common/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MentorPageComponent } from './mentor-page/mentor-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { CarouselComponent } from './main-page/carousel/carousel.component';
import { GroupsGridComponent } from './main-page/groups-grid/groups-grid.component';
import { NewsTilesComponent } from './main-page/news-tiles/news-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavBarComponent,
    FooterComponent,
    MentorPageComponent,
    MainPageComponent,
    CarouselComponent,
    GroupsGridComponent,
    NewsTilesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
