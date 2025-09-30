from fastapi import APIRouter
from controller.controller import ItemController
from models.item import Item

router = APIRouter()

#Add an item
@router.post("/") 
async def create_item(item: Item):
    return await ItemController.create_item(item)    

#Get all items
@router.get("/")
async def get_items():
    return await ItemController.get_items()

#Update an item
@router.put("/{item_id}")
async def update_item(item_id: str, item: Item):
    return await ItemController.update_item(item_id, item)

#Delete an item
@router.delete("/{item_id}")
async def delete_item(item_id: str):
    return await ItemController.delete_item(item_id)



# MongoDB methods: 
# insert_one() - Insert single document
# insert_many() - Insert multiple documents
# find_one() - Find single document
# find() - Find multiple documents
# update_one() - Update single document
# update_many() - Update multiple documents
# delete_one() - Delete single document
# delete_many() - Delete multiple documents
# count_documents() - Count documents
# aggregate() - Run aggregation pipeline

