import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { StatisticComponent } from './views/statistic/statistic.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './views/signup/signup.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    StatisticComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactHeaderComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    SignupComponent,
    MoveListComponent,
    TransferFundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
