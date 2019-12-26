import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { NgMatModule } from './modules/ngmat.module';
import { DialogComponent } from './layouts/dialog/dialog.component';
import { AuthStateService } from './state/auth-state.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthTokenInterceptor } from './interceptors/auth.token.interceptor';
import { HttpBaseUrlInterceptor } from './interceptors/http.base.url.interceptor';
import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryOnboardingService } from './api/in-memory-onboarding.service';
import { ErrorComponent } from './components/error/error.component';

const share = [AppHeaderComponent, DialogComponent, ErrorComponent];

@NgModule({
  declarations: share,
  exports: share,
  imports: [
    CommonModule,
    NgMatModule,
    HttpClientModule,
    environment.mockApi
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryOnboardingService)
      : []
  ],
  providers: [
    AuthStateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpBaseUrlInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
