import { serve } from "./deps.js";
import { configure } from "./deps.js";
import * as listControllers from "./controllers/listControllers.js";
import * as itemControllers from "./controllers/itemControllers.js";
import * as statisticControllers from "./controllers/statisticControllers.js";
import * as requestUtils from "./utils/requestUtils.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname==="/" && request.method==="GET") {
    return await statisticControllers.viewListCount();
  } else if (url.pathname==="/lists" && request.method==="POST"){
    return await listControllers.addList(request);
  } else if (url.pathname==="/lists" && request.method==="GET") {
    return await listControllers.viewActiveLists();
  } else if (url.pathname.match("/lists/[0-9]+") && request.method==="GET") {
    return await listControllers.viewSingleList(request);
  } else if (url.pathname.match("/lists/[0-9]+/deactivate") && request.method==="POST") {
    return await listControllers.deactivateAList(request);
  } else if (url.pathname.match("/lists/[0-9]+/items/[0-9]+/collect") && request.method==="POST") {
    return await itemControllers.markCollectedItem(request);
  } else if (url.pathname.match("/lists/[0-9]+/items") && request.method==="POST") {
    return await itemControllers.addItem(request);
  } else {
    return requestUtils.redirectTo("/");
  }
};

serve(handleRequest, { port: 7777 });
