import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { SocketService } from '../socket/socket.service';
import { map } from 'rxjs';
import { Message } from '../model/message';
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  socket: any
  messages: Message[] = []
  senderName: string = 'Anonymous'
  totalconnectedClient: any = 1
  history: Message [] = []
  constructor(private socketService: SocketService) { 
    this.socketService.currentMessage.subscribe({
      next:(data:Message)=>{  
        this.messages.push(data)
        localStorage.setItem('history',JSON.stringify(this.messages))
        }
    })
    this.socketService.totalClients.subscribe({
      next:(data)=>{  
        this.totalconnectedClient = data
        }
    })
   }

  ngOnInit(): void {
    this.socket = this.socketService.socket
    let history = localStorage.getItem('history')
    if(history){
      this.messages = JSON.parse(history)
    }
    else{
      this.messages = []
    }
  }

  updateSenderToService(val:string){
    this.socketService.updateSender(val)
  }



}
