import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatDialogModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}