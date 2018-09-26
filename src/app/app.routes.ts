import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponentComponent } from './logo-component/logo-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ResgistrationComponentComponent } from './resgistration-component/resgistration-component.component';

const route: Routes = [
    {path: '', component: LogoComponentComponent},
    {path: 'logo', component: LogoComponentComponent},
    {path: 'home', component: HomeComponentComponent},
    {path: 'registration', component: ResgistrationComponentComponent}
]

export const path_route: ModuleWithProviders = RouterModule.forRoot(route);