import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
// componentes reutilizables
import { IncrementadorComponent } from '../component/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    AccountSettingsComponent

],
exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component

],
imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    CommonModule
]

})

export class PagesModule {

}
