import { Router } from "https://deno.land/x/oak/mod.ts";
import { pickupOrder, getOrderState, deliveryOrder  } from "../controllers/delivery.ts";

export const router = new Router();

router
    .get("/api/v1/delivery/orders/:id",getOrderState)
    .get("/api/v1/delivery/pickup/:id",pickupOrder)
    .get("/api/v1/delivery/deliver/:id",deliveryOrder);
