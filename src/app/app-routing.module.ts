import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'user-profile', component: UserComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: "", redirectTo:"/user-profile", pathMatch:"full"},
  { path: "**", component: NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
