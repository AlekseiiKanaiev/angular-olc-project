import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclerentaComponent } from './components/vehiclerenta/vehiclerenta.component';
import { RealtyComponent } from './components/realty/realty.component';

const orendaRoutes: Routes = [
    {path: 'orenda', redirectTo: 'orenda/vehiclerenta', pathMatch: 'full'},
    {path: 'orenda/vehiclerenta', component: VehiclerentaComponent},
    {path: 'orenda/realty', component: RealtyComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(orendaRoutes)
    ],
    exports: [RouterModule]
})
export class OrendaPagesRouterModule {}
export const orendaPagesRoutingComponents = [
    VehiclerentaComponent,
    RealtyComponent
];
