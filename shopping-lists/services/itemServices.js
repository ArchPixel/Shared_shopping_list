import {sql} from "../database/database.js";

const createItem = async(listID,name) => {
    await sql `INSERT INTO 
    shopping_list_items (shopping_list_id,name) 
    VALUES (${listID},${name})`;
}

const findCurrentItems = async(listID) => {
   const rows = await sql `SELECT * FROM shopping_list_items 
   WHERE shopping_list_id = ${listID} AND collected = FALSE
   ORDER BY name`;

   if (rows && rows.length >0) {
    return rows;
   }

   return false;
}

const findCollectedItems = async(listID) => {
    const rows = await sql `SELECT * FROM shopping_list_items 
    WHERE shopping_list_id = ${listID} AND collected = TRUE
    ORDER BY name`;
 
    if (rows && rows.length >0) {
     return rows;
    }
 
    return false;
 }

const collectItem = async(itemID) => {
    await sql `UPDATE shopping_list_items 
    SET collected = TRUE
    WHERE id = ${itemID}`;
}

export { createItem, findCurrentItems, collectItem, findCollectedItems };