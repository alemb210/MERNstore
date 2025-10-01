from fastapi import APIRouter, WebSocket
from controller.ws_controller import WSController

router = APIRouter()
ws_controller = WSController()

@router.websocket("/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    return await ws_controller.websocket_endpoint(websocket, client_id)