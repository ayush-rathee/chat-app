import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatScreenModule } from './chat-screen/chat-screen.module';
import { ChatWindowComponent } from './chat-window/chat-window.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"chat", component: ChatWindowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
