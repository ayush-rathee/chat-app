import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ChatTextboxComponent } from '../chat-textbox/chat-textbox.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatWindowComponent,
    ChatTextboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ChatScreenModule { }
