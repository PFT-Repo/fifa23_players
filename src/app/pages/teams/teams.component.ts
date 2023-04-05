import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  player!:any;
  videos:any[]=[];
  id!: string;
  
  breakpoint: number;
  mobileBreakdown= 640;
  midTabBreakdown= 1024;
  constructor(private route: ActivatedRoute, private service : PlayerService,
    private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@ChildOne', 'Child One');
    this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 1:3;

    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
   });
   console.log(this.id);
   setTimeout(() => {
    if(service.imgList.length>0)
    this.player =  service.getPlayer(this.id);
   console.log(this.player);
   this.videos= this.player.teams_history
   console.log(this.videos);
   }, 500);
   
   
  }

  onResize(event:any) {
    if(event.target != null){
      this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 1:3;
    }
  }
  }

