import { Router } from "https://deno.land/x/oak/mod.ts";
import { pickupOrder, getOrderState, deliveryOrder  } from "../controllers/esb.ts";

export const router = new Router();

router
    .post("/api/v1/createorder",getOrderState)
    .get("/api/v1/getorder/:id",pickupOrder)
    .get("/api/v1/recieveorder/:id",deliveryOrder)
    .get("/api/v1/deliverorder/:id",deliveryOrder);
