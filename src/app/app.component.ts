import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fifa23_players';
  constructor(translate:TranslateService,public dialog: MatDialog){
    translate.setDefaultLang('en')
    translate.use(translate.getBrowserLang()!);
this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: { message: 'Made by LOVE' }
    });
  }

}

