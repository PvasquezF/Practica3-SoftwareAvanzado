import { Router } from "https://deno.land/x/oak/mod.ts";
import { getNewOrder, getOrderState } from "../controllers/clients.ts";

export const router = new Router();

router
    .post("/api/v1/clients/orders", getNewOrder)
    .get("/api/v1/clients/orders/:id",getOrderState);
