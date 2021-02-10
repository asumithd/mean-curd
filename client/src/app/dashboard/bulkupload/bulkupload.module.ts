import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkuploadComponent } from './bulkupload.component';
import { BulkuploadRoutingModule } from './bulkupload-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BulkuploadComponent],
  imports: [
    CommonModule,
    BulkuploadRoutingModule,
    FormsModule
  ]
})
export class BulkuploadModule { }