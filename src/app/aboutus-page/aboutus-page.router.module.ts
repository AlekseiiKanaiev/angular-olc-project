import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus.component';

const aboutusRoutes: Routes = [
    {path: 'aboutus', component: AboutusComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(aboutusRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutusPageRouterModule {}
