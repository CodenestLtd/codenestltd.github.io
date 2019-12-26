import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './layouts/header/header.component';
import {NgMatModule} from './modules/ngmat.module';
import {DialogComponent} from './layouts/dialog/dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {ErrorComponent} from './components/error/error.component';
import {FooterComponent} from "./layouts/footer/footer.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    ErrorComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    NgMatModule,
    HttpClientModule
  ],
  providers: []
})
export class SharedModule {
}
