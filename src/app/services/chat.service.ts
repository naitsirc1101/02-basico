import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

  sendMessage( mensaje: string ) {
    // console.log(mensaje, ' MEnsaje SendMsg');
    const payload = {
       de: 'Cristian',
       cuerpo: mensaje
    };
    // console.log(payload, 'payloadSendMsg ANTES');

    this.wsService.emit('mensaje', payload);
    // console.log(payload, 'payloadSendMsg DESPUES');
  }

  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }
}
