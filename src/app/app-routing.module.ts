import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { CheeseComponent } from './components/cheese/cheese.component';
import { WineComponent } from './components//wine/wine.component';
import { BourbonComponent } from './components/bourbon/bourbon.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cheese', component: CheeseComponent },
  { path: 'wine', component: WineComponent },
  { path: 'bourbon', component: BourbonComponent },
  { path: '**', redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
