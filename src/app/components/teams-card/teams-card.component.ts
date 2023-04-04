import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['./teams-card.component.scss']
})
export class TeamsCardComponent {
  @Input() video!:any;

}
