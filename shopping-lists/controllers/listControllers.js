import { renderFile } from "../deps.js";
import * as listServices from "../services/listServices.js";
import * as itemServices from "../services/itemServices.js";
import * as requestUtils from "../utils/requestUtils.js";

const ResponseDetails = {
    headers: {"Content-type": "text/html;charset=UTF-8"}
};

const addList = async(request) => {
    const formData = await request.formData();
    const name = formData.get("name");

    await listServices.create(name);

    return requestUtils.redirectTo("/lists");
};

const viewActiveLists = async () => {
    const data = {
        lists: await listServices.findAllActiveLists(),
    };

    return new Response(await renderFile("lists.eta",data),ResponseDetails);
};

const deactivateAList = async(request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    const id = urlParts[2];

    await listServices.deActivateById(id);
    
    return requestUtils.redirectTo("/lists");
};

const viewSingleList = async(request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    const id = urlParts[2];

    const data = {
        list: await listServices.findById(id),
        items: await itemServices.findCurrentItems(id),
        collectedItems: await itemServices.findCollectedItems(id),
    };

    return new Response(await renderFile("items.eta",data),ResponseDetails);
};

export { addList, viewActiveLists, deactivateAList, viewSingleList };
