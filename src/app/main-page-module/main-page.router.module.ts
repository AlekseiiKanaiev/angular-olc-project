import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page.component';

const mainPageRoutes: Routes = [
    {path: 'golovna', component: MainPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainPageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainPageRouterModule {}
// export const mainPageRoutingComponents = [
//     MainPageComponent
// ];
