import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'company',
                loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
            },
            {
                path: 'bulkupload',
                loadChildren: () => import('./bulkupload/bulkupload.module').then(m => m.BulkuploadModule)
            }
            

        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class DashboardRouting { }