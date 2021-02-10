import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', component: CompanyComponent},
  { path: 'bulkupload', component: BulkuploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
