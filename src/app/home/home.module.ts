import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { NgMatModule } from '../shared/modules/ngmat.module';
import { SharedModule } from '../shared/shared.module';
import { ConsentComponent } from './consent/consent.component';
import { OtpComponent } from './otp/otp.component';
import { DocumentinfoComponent } from './documentinfo/documentinfo.component';
import { DocumentcaptureComponent } from './documentcapture/documentcapture.component';
import { DocumentselectionComponent } from './documentselection/documentselection.component';
import { SelfieCaptureComponent } from './selfiecapture/selfiecapture.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  imports: [CommonModule, ChallengeRoutingModule, SharedModule, NgMatModule],
  declarations: [
    SplashscreenComponent,
    ConsentComponent,
    OtpComponent,
    DocumentinfoComponent,
    DocumentselectionComponent,
    DocumentcaptureComponent,
    SelfieCaptureComponent,
    CompleteComponent
  ]
})
export class ChallengeModule {}
