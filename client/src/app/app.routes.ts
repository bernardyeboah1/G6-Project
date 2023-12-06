import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'tournament', component: TournamentComponent},
   {path: 'contact-us', component: ContactUsComponent},
   {path:'', redirectTo:"/home",pathMatch:'full'}
];
