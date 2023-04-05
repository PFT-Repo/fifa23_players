import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataInterface } from 'src/app/interfaces/dataInterface';
import { PlayerService } from 'src/app/services/player.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  breakpoint: number;
  breakpoint2: any;
  mobileBreakdown= 640;
  midTabBreakdown= 1024;
  id!: string;
  player!:dataInterface;

  constructor(private route: ActivatedRoute, private service : PlayerService, private router:Router,
    private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@ChildOne', 'Child One');

    this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 1:2;
    this.breakpoint2 = (window.innerWidth <= this.mobileBreakdown) ? "1:2" : (window.innerWidth <= this.midTabBreakdown) ? "1:1":"1:1";
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
   });

   console.log(this.id);
   setTimeout(() => {
    if(service.imgList.length>0)
    this.player =  service.getPlayer(this.id);
   console.log(this.player);
   }, 500);
  }

  onResize(event:any) {
    if(event.target != null){
      this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 1:2;
      this.breakpoint2 = (window.innerWidth <= this.mobileBreakdown) ? "1:2" : (window.innerWidth <= this.midTabBreakdown) ? "1:1":"1:1";

    }
  }
  
}
