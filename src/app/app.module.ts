import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsexComponent } from './formsex/formsex.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { CrudComponent } from './crud/crud.component';
import { CrudexComponent } from './crudex/crudex.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsexComponent,
    ReactiveformsComponent,
    HttpclientComponent,
    CrudComponent,
    CrudexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
