import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, {
      path: 'home',
      loadChildren: './auth/auth.module#AuthModule'
    },
    { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }