import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { RankingService } from "src/domains/rankings/ranking.service";

@WebSocketGateway({ cors: true })
export class AppGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly rankingService: RankingService,
  ) { }

  /**
   * This method is called after the gateway has been initialized.
   * It sets up an interval to fetch live rankings every 5 seconds and emit them to all connected clients.
   * @param server The server instance.
   * @returns void
   * @memberof AppGateway
   * @example
   * appGateway.afterInit(server);
   * */
  afterInit(server: Server) {
    setInterval(async () => {
      const rankings = await this.rankingService.getLiveRankings();
      server.emit('rankingsUpdate', rankings);
    }, 5000);
  }

  /**
   * This method is called when a client connects to the gateway.
   * It emits the initial rankings to the client.
   * @param client The client instance.
   * @returns void
   * @memberof AppGateway
   * @example
   * appGateway.handleConnection(client);
   * */
  @SubscribeMessage('requestInitialRankings')
  handleInitialRankings(client: Socket) {
    client.emit('initialRankings', this.rankingService.getCachedRankings());
  }
}