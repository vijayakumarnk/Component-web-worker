import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponentComponent } from './test-component/test-component.component';


const routes: Routes = [{
  path:'comp', component:TestComponentComponent
},
{
   path:'', component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
