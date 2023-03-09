import { renderFile } from "../deps.js";
import * as statisticServices from "../services/statisticServices.js";

const ResponseDetails = {
    headers: {"Content-type": "text/html;charset=UTF-8"}
};

const viewListCount = async(request) => {
    const data = {
        count: await statisticServices.countLists(),
        itemsCount: await statisticServices.countItems(),
    };

    return new Response(await renderFile("index.eta",data),ResponseDetails);
};

export { viewListCount };