import { Router } from "https://deno.land/x/oak/mod.ts";
import { recieveOrderToDeliver, getOrder, deliveryOrder, createOrder  } from "../controllers/esb.ts";

export const router = new Router();

router
    .post("/api/v1/esb/createorder",createOrder)
    .get("/api/v1/esb/getorder/:id",getOrder)
    .get("/api/v1/esb/recieveorder/:id",recieveOrderToDeliver)
    .get("/api/v1/esb/deliverorder/:id",deliveryOrder);
