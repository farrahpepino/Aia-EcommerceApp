import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { ShopComponent } from './components/main/shop/shop.component';
import { AboutComponent } from './components/main/about/about.component';
import { CheckoutComponent } from './components/main/checkout/checkout.component';
import { authGuard } from './guards/auth.guard';
import {guestGuard} from './guards/guest.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HeroComponent,
        canActivate: [authGuard]
    },
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,

    },
    {
        path: 'shop',
        component: ShopComponent,
        canActivate: [authGuard]

    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [authGuard]

    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [authGuard]

    }
];
