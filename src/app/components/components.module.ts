import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifaGenCardComponent } from './fifa-gen-card/fifa-gen-card.component';
import { FifaAllStatsComponent } from './fifa-all-stats/fifa-all-stats.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { TeamsCardComponent } from './teams-card/teams-card.component';

@NgModule({
  declarations: [
    FifaGenCardComponent,
    FifaAllStatsComponent,
    TeamsCardComponent,
  ],
  imports: [
    CommonModule,
     MaterialModule,
    TranslateModule, 
    HttpClientModule
  ],
  exports: [
    FifaGenCardComponent,
    FifaAllStatsComponent,
    TeamsCardComponent
  ]
})
export class ComponentsModule { }
