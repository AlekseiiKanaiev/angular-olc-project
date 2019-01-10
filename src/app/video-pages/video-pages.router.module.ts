import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OblvideoComponent } from './components/oblvideo/oblvideo.component';
import { PrivatvideoComponent } from './components/privatvideo/privatvideo.component';

const videoRoutes: Routes = [
    {path: 'video', redirectTo: 'gallery/privatvideo', pathMatch: 'full'},
    {path: 'gallery/oblvideo', component: OblvideoComponent},
    {path: 'gallery/privatvideo', component: PrivatvideoComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(videoRoutes)
    ],
    exports: [RouterModule]
})
export class VideoPagesRouterModule {}
export const videoPagesRoutingComponents = [
    OblvideoComponent,
    PrivatvideoComponent
];
