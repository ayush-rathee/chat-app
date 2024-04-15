import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket/socket.service';

@Component({
  selector: 'app-chat-textbox',
  templateUrl: './chat-textbox.component.html',
  styleUrls: ['./chat-textbox.component.css']
})
export class ChatTextboxComponent implements OnInit {

  
  socket: any
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socket = this.socketService.socket
  }

  sendMessage(message:string){
    this.socketService.senMessageToService(message)
  }
}
