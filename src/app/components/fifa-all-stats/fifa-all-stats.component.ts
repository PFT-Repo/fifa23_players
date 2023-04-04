import { Component, Input, OnInit } from '@angular/core';
import { dataInterface } from 'src/app/interfaces/dataInterface';

@Component({
  selector: 'app-fifa-all-stats',
  templateUrl: './fifa-all-stats.component.html',
  styleUrls: ['./fifa-all-stats.component.scss']
})
export class FifaAllStatsComponent implements OnInit{
  @Input() player!:any;

  breakpoint: number;
  breakpoint2: any;
  mobileBreakdown= 640;
  midTabBreakdown= 1024;
  paceValue!: any;
  passValue!:any;
  defValue!:any;
  shoValue!:any;
  driValue!:any;
  phyValue!:any;
  constructor(){
    this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 2:3;

    this.breakpoint2 = (window.innerWidth <= this.mobileBreakdown) ? "1:1" : (window.innerWidth <= this.midTabBreakdown) ? "1:.5":"2:4";
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.paceValue = this.player.properties.pac.pace; 
      this.passValue = this.player.properties.pas.passing;
      this.defValue = this.player.properties.def.defending;
      this.shoValue = this.player.properties.sho.shooting;
      this.driValue = this.player.properties.dri.dribbling;
      this.phyValue = this.player.properties.phy.physicality;

    }, 500);
    
  }

  onResize(event:any) {
    if(event.target != null){
      this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 2:3;
      this.breakpoint2 = (window.innerWidth <= this.mobileBreakdown) ? "1:1" : (window.innerWidth <= this.midTabBreakdown) ? "1:1":"2:4";
    }
  }

}
