import * as itemServices from "../services/itemServices.js";
import * as requestUtils from "../utils/requestUtils.js";

const addItem = async(request) => {
    const formData = await request.formData();
    const name = formData.get("name");

    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    const id = urlParts[2];

    await itemServices.createItem(id,name);
    
    return requestUtils.redirectTo(`/lists/${id}`);
}

const markCollectedItem = async(request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    const listID = urlParts[2];
    const itemID = urlParts[4];

    await itemServices.collectItem(itemID);

    return requestUtils.redirectTo(`/lists/${listID}`);
}

export { addItem, markCollectedItem };
