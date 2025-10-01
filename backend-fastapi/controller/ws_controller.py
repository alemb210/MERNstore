from fastapi import WebSocket, WebSocketDisconnect
from config.connection_manager import ConnectionManager

class WSController:
    def __init__(self):
        self.manager = ConnectionManager()

    async def websocket_endpoint(self, websocket: WebSocket, client_id: int):
        await self.manager.connect(websocket)
        try:
            while True:
                data = await websocket.receive_text()
                await self.manager.send_personal_message(f"Message text was: {data}", websocket)
                await self.manager.broadcast(f"Client #{client_id} says: {data}")
        except WebSocketDisconnect:
            self.manager.disconnect(websocket)
            await self.manager.broadcast(f"Client #{client_id} disconnected")





    # async def connect(self, websocket: WebSocket):
    #     await websocket.accept()
    #     self.active_connections.append(websocket)

    # def disconnect(self, websocket: WebSocket):
    #     self.active_connections.remove(websocket)

    # async def send_personal_message(self, message: str, websocket: WebSocket):
    #     await websocket.send_text(message)

    # async def broadcast(self, message: str):
    #     for connection in self.active_connections:
    #         await connection.send_text(message)