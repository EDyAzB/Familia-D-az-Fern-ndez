import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FamiliaComponent } from './familia/familia.component';
import { DetallesMiembroFamiliaComponent } from './detalles-miembro-familia/detalles-miembro-familia.component';


export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'familia', component:FamiliaComponent},
{path: 'familia/:miembroId', component:DetallesMiembroFamiliaComponent},
    //   {
    //     path: 'outputs', component: OutputComponent
    //   },
    //   {
    //     path: 'queries', component: QueriesComponent
    //   },
    //   {
    //     path: 'model-inputs', component: ModelInputsComponent
    //   },

{ path: '**', redirectTo: '', pathMatch: 'full' },
];
