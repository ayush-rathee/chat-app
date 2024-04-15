import { Injectable } from '@angular/core';
import { io } from 'socket.io-client'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Message } from '../model/message';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  senderName: string = 'Anonymous'
  message: Message = {
    text: '',
    sender: '',
    time: '',
    areYouSender: false
  }
  messageSource = new Subject<Message>()
  currentMessage = this.messageSource.asObservable()
  totalClient = new Subject()
  totalClients = this.totalClient.asObservable()

  constructor() {
    this.socket = io('http://localhost:3000')
    this.socket.on('msgReciever', (data: Message) => {
      this.message.areYouSender = false
      this.messageSource.next(data)
    })
    this.socket.on('msgSender', (data: Message) => {
      this.message.areYouSender = true
      this.messageSource.next(data)
    })
    this.socket.on('clients-total', (data: any) => {
      this.totalClient.next(data)
    })
  }

  senMessageToService(message: string) {
    this.sendMessageToBackEnd(message)
  }

  sendMessageToBackEnd(message: string) {
    this.message.text = message,
    this.message.time = moment().format('MMMM Do, h:mm')
    this.message.sender = this.senderName
    this.socket.emit('msg', this.message)
  }

  updateSender(val: string) {
    this.senderName = val
  }


}
