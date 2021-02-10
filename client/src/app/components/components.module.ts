import { MessageService } from './../services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { CompanyComponent } from './company/company.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    CompanyComponent,
    BulkuploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class ComponentsModule { }
