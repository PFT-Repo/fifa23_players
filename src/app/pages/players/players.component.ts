import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

  breakpoint: number;
  mobileBreakdown= 640;
  midTabBreakdown= 1024;
  players:any;
  
  constructor(private service:PlayerService, private router:Router){
    this.service.imgList;
    this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 2:3;
    }
  ngOnInit(): void {
    setTimeout(() => {
      this.players = this.service.imgList;
      console.log(this.players);
      
    }, 1000);
  }

  onResize(event:any) {
    if(event.target != null){
      this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 2:3;
    }
  }

  goDetails(id:any){
    this.router.navigate( ['/players',id]);
  }
}
