import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { dataInterface } from 'src/app/interfaces/dataInterface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-fifa-gen-card',
  templateUrl: './fifa-gen-card.component.html',
  styleUrls: ['./fifa-gen-card.component.scss']
})
export class FifaGenCardComponent {
  @Input() player!:any;
  fifaPlayer?: dataInterface;
  constructor(private translate:TranslateService, private service:PlayerService){
    setTimeout(() => {
      console.log(this.player.properties.nationality);
    }, 500);
     }
  
}
