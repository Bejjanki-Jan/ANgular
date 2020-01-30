import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ActionsComponent } from './actions/actions.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  { path:'', component: UsersComponent},
  {path:'posts', component: ActionsComponent},
  {path:'posts/:userId' ,component:ActionsComponent},
  {path:'albums', component:AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
