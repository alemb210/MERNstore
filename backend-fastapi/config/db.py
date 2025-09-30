import os
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Global client and db variable
client = None
database = None

async def connect_db():
    global client, database
    try:
        client = AsyncIOMotorClient(os.getenv('MONGO_URI'))
        # Test the connection
        await client.admin.command('ping')
        database = client.get_database()
        print(f"MongoDB connected: {client.address[0]}:{client.address[1]}")
        return client
    except Exception as error:
        print(f"MongoDB connection error: {error}")
        sys.exit(1)  # 1: failure 0: success


async def get_database():
    global client, database
    if client is None or database is None:
        client = await connect_db()
    return database