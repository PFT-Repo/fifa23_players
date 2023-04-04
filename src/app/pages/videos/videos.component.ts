import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  player!:any;
  breakpoint: number;
  mobileBreakdown= 640;
  midTabBreakdown= 1024;
  videos:any[]=[];
  id!: string;

  constructor(private route: ActivatedRoute,private service:PlayerService){

    this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 1:2;

    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
   });
   console.log(this.id);
   setTimeout(() => {
    if(service.imgList.length>0)
    this.player =  service.getPlayer(this.id);
   console.log(this.player);
   this.videos= this.player.videos
   console.log(this.videos);
   }, 500);
   
   
  }

  onResize(event:any) {
    if(event.target != null){
      this.breakpoint = (window.innerWidth <= this.mobileBreakdown) ? 1 : (window.innerWidth <= this.midTabBreakdown) ? 1:2;
    }
  }
}
