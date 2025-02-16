import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    emitEvent(data: any) {
        this.server.emit('customNameEvent', data);
    }

    @SubscribeMessage('clientEvent')
    handleClientEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
        console.log('Mensaje recibido del cliente:', data);
        this.server.emit('customNameEvent', `El servidor responde: ${data}`);
    }
}