import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterielModule} from "./MaterielModule";
import { AddResponsableComponent } from './Components/AddResponsable/add-responsable/add-responsable.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddResponsableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterielModule,
    RouterModule.forRoot([{
      path : '',
      component:LoginComponent
    }]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
