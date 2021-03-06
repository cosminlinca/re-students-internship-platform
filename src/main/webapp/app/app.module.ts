import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StudentsIntenshipPlatformAvraSharedModule } from 'app/shared/shared.module';
import { StudentsIntenshipPlatformAvraCoreModule } from 'app/core/core.module';
import { StudentsIntenshipPlatformAvraAppRoutingModule } from './app-routing.module';
import { StudentsIntenshipPlatformAvraHomeModule } from './home/home.module';
import { StudentsIntenshipPlatformAvraEntityModule } from './entities/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StudentsIntenshipPlatformAvraSharedModule,
    StudentsIntenshipPlatformAvraCoreModule,
    StudentsIntenshipPlatformAvraHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    StudentsIntenshipPlatformAvraEntityModule,
    StudentsIntenshipPlatformAvraAppRoutingModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    OfferDetailsComponent,
  ],
  bootstrap: [MainComponent],
})
export class StudentsIntenshipPlatformAvraAppModule {}
