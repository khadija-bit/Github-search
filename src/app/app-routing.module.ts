import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  { path: 'user-profile', component: UserComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: "", redirectTo:"/user-profile", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
