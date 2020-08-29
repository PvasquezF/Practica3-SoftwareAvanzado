import { Router } from "https://deno.land/x/oak/mod.ts";
import { getIndex, getMenus, getOrder, createOrder, send, delivery } from "../controllers/restaurants.ts";

export const router = new Router();

router
    .get("/api/v1/restaurant/", getIndex)
    .get("/api/v1/restaurant/menus", getMenus)
    .get("/api/v1/restaurant/orders/:id", getOrder)
    .get("/api/v1/restaurant/sendorder/:id", send)
    .get("/api/v1/restaurant/deliverorder/:id", delivery)
    .post("/api/v1/restaurant/orders", createOrder);
