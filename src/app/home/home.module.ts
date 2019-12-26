import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {NgMatModule} from '../shared/modules/ngmat.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, NgMatModule],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
