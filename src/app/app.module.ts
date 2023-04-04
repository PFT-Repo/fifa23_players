import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { VideosComponent } from './pages/videos/videos.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { DetailsComponent } from './pages/details/details.component';
import { ComponentsModule } from './components/components.module';
import { PlayersComponent } from './pages/players/players.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VideosComponent,
    TeamsComponent,
    DetailsComponent,
    PlayersComponent,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MaterialModule,
    YouTubePlayerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
