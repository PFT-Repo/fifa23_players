import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { PlayersComponent } from './pages/players/players.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { VideosComponent } from './pages/videos/videos.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:'players', children:[
      {path:"",component:PlayersComponent, data:{
        breadcum:"list"
      }},
      {path:":id", children:[
        {path:"", redirectTo:'details',pathMatch:"full"},
        {path:"details", component:DetailsComponent, data:{
          breadcum:"details"
        }},
        {path:"videos",component:VideosComponent, data:{
        breadcum:"videos"
      }},
        {path:"teams",component:TeamsComponent, data:{
        breadcum:"teams"
      }}
      ], data:{
        breadcum:"player"
      }}],
      data:{
        breadcum:"players"
      }
  },
  {path:"**", redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
