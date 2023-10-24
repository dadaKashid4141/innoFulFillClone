import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-fulfillment',
  templateUrl: './fulfillment.component.html',
  styleUrls: ['./fulfillment.component.css'],
  animations: [
    trigger('slideUpOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('* => void', [
        style({ transform: 'translateY(0)' }),
        animate('500ms cubic-bezier(0, 1, 0, 1)', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class FulfillmentComponent {


tt:any[]=[{
  id: "timeTrack",
  imageSrc: "../../assets/features-thumb-1.png",
  title: "In Time, All The Time.",
  text: "Deliver products within stipulated time with high accuracy and least time.",
}];
lt: any[]=[{
  id: "liveTrack",
  imageSrc: "../../assets/mobimages.jpeg",
  title: "Track your product.",
  text: "Check your delivery with live location, with us.",
}];
cod:any[]=[{
  id: "cashOD",
  imageSrc: "../../assets/cod.png",
  title: "We Provide COD",
  text: "Our cash on delivery policy is gold.",
}];
multPay:any[]=[{
  id: "multiplePayment",
  imageSrc: "../../assets/QRCodePaymnt.png",
  title: "We Have Multiple Options",
  text: "We can choose any option for payment...",
}]


activeContainerId: string ='timeTrack';


  constructor( private router : Router){}
  goToPart(fragment : any){
    this.router.navigateByUrl('fulfillment#'+fragment);
    console.log(document.getElementById(fragment)
    );
    
  }
  setActiveContainer(containerId: string) {
    this.activeContainerId = containerId;
 
  }
  // isAnchorActive(containerId: string): boolean {
  //   return this.activeContainerId === containerId;
  // }
}
