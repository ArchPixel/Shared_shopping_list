import {sql} from "../database/database.js";

const create = async (name) =>{
    await sql `INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const findById = async(id) => {
    const rows = await sql `SELECT * FROM shopping_lists 
    WHERE id = ${ id }`;

    if (rows && rows.length > 0) {
        return rows[0];
    }

    return { id:0, name:"Unknown"};
};

const findAllActiveLists = async() => {
    return await sql `SELECT * FROM shopping_lists WHERE active = true`;
};

const deActivateById = async(id) => {
    await sql `UPDATE shopping_lists SET active = false WHERE id = ${ id }`; 
};

 
export { create, findById, deActivateById, findAllActiveLists };