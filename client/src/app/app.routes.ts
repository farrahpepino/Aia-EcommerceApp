import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { ShopComponent } from './components/main/shop/shop.component';
import { AboutComponent } from './components/main/about/about.component';
import { CheckoutComponent } from './components/main/checkout/checkout.component';
export const routes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    }
];
