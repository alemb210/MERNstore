from fastapi import APIRouter, HTTPException
from models.item import Item
from config.db import get_database #db functions
from bson import ObjectId #mongo object IDs

class ItemController:
    @staticmethod #Add an item
    async def create_item(item: Item):
        db = await get_database()
        collection = db.items

        result = await collection.insert_one(item.dict())
        return {"success": True, "id": str(result.inserted_id)}

    @staticmethod #Get all items
    async def get_items():
        db = await get_database()
        collection = db.items
        items = []
        cursor = collection.find({})
        async for document in cursor:
            document['_id'] = str(document['_id'])  # Convert ObjectId to string
            items.append(document)
        return items

    @staticmethod #Update an item
    async def update_item(item_id: str, item: Item):
        if(not ObjectId.is_valid(item_id)):
            raise HTTPException(status_code=400, detail=f"Invalid item ID {item_id}")
        db = await get_database()
        collection = db.items
        res = await collection.update_one(
            {"_id": ObjectId(item_id)},
            {"$set": item.dict()}
        )
        if res is None or res.matched_count == 0:
            raise HTTPException(status_code=404, detail=f"Item {item_id} not found")
        return {"success": True, "updated_count": res.modified_count}

    @staticmethod #Delete an item
    async def delete_item(item_id: str):
        if(not ObjectId.is_valid(item_id)):
            raise HTTPException(status_code=400, detail=f"Invalid item ID {item_id}")
        db = await get_database()
        collection = db.items
        res = await collection.delete_one(
            {"_id":  ObjectId(item_id)}
        )
        if res is None or res.deleted_count == 0:
            raise HTTPException(status_code=404, detail=f"Item {item_id} not found")
        return {"success": True, "deleted_count": res.deleted_count}