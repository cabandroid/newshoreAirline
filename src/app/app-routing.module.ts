import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './information/data/data.component';


const routes: Routes = [
  { path: 'airline', component: DataComponent},
  { path: '', redirectTo: '/airline', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
