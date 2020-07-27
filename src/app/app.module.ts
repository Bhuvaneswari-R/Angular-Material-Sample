import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { RegistrationFormComponent } from './registration/registration.component';
import { MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule, 
    MatRippleModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatProgressBarModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent, RegistrationFormComponent]
})
export class AppModule { }
