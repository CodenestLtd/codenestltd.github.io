import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { ConsentComponent } from './consent/consent.component';
import { OtpComponent } from './otp/otp.component';
import { DocumentinfoComponent } from './documentinfo/documentinfo.component';
import { DocumentcaptureComponent } from './documentcapture/documentcapture.component';
import { DocumentselectionComponent } from './documentselection/documentselection.component';
import { SelfieCaptureComponent } from './selfiecapture/selfiecapture.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing' },
  { path: 'landing', component: SplashscreenComponent },
  { path: 'consent', component: ConsentComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'documentinfo', component: DocumentinfoComponent },
  { path: 'documentselection', component: DocumentselectionComponent },
  { path: 'documentcapture', component: DocumentcaptureComponent },
  { path: 'selfiecapture', component: SelfieCaptureComponent },
  { path: 'complete', component: CompleteComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule {}
