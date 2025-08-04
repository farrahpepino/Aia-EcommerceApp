import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { ShopComponent } from './components/main/shop/shop.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
