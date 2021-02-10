import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard-routing';



@NgModule({
    imports: [ 
        CommonModule,
        DashboardRouting,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [
        DashboardComponent, 
        
    ]
})

export class DashboardModule { }
