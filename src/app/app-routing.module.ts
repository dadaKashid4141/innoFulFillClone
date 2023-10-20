import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { WhoIsItForComponent } from './who-is-it-for/who-is-it-for.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { SolutionComponent } from './solution/solution.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FulfillmentComponent } from './fulfillment/fulfillment.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  // {path: 'features' , component: FeaturesComponent},
  // { path: 'whoIsItFor' , component : WhoIsItForComponent},
  // { path: 'howItWork' , component : HowItWorkComponent},
  // { path: 'solution' , component : SolutionComponent},
  // { path: 'aboutUs' , component : AboutUsComponent},
  // { path: 'getInTouch' , component : AboutUsComponent},
  // { path: 'fulfillment' , component : FulfillmentComponent},
  // { path: 'faqs' , component : FaqsComponent},
  // { path: 'footer' , component : FooterComponent}
];
const routerOption : ExtraOptions ={
  scrollPositionRestoration : 'enabled',
  anchorScrolling : 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOption )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
