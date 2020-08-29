import { menus } from "../data/menu.ts";
import { orders, states } from "../data/orders.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const getIndex = (context: any) => {
    context.response.body = "Hello world!";
}

const getMenus = (context: any) => {
    context.response.body = {
        success: true,
        data: menus
    };
}

const getOrder = (context: any) => {
    let foundOrder = null;
    if (context.params && context.params.id) {
        for (let order of orders) {
            if (order.id === context.params.id) {
                foundOrder = order;
                break;
            }
        }
    }
    if (foundOrder) {
        context.response.body = {
            success: true,
            data: foundOrder
        };
    } else {
        context.response.body = {
            success: false,
            error: {
                errors: [
                    `El pedido ingresado no existe.`
                ]
            }
        }
    }
}

const createOrder = async (context: any) => {
    const body = await context.request.body();
    const menu = menus.filter(m => {
        if (m.id === body.value.menu) {
            return m;
        }
    });
    const order = {
        id: v4.generate(),
        state: states.RECIBIDO,
        state_name: states[states.RECIBIDO],
        menu: menu[0],
        created_at: new Date()
    };
    orders.push(order);
    setInterval(() => {
        order.state = states.PREPARANDO;
        order.state_name = states[states.PREPARANDO];
        console.log(`EL PEDIDO ${order.id} HA SIDO VISTO Y HA CAMBIADO A ESTADO DE PREPARACIÓN`);
    }, 10000);

    setInterval(() => {
        order.state = states.LISTO;
        order.state_name = states[states.LISTO];
        console.log(`EL PEDIDO ${order.id} FINALIZO SU PREPARACIÓN Y HA CAMBIADO SU ESTADO A LISTO`);
    }, 15000);
    
    setInterval(() => {
        order.state = states.LISTO;
        order.state_name = states[states.LISTO];
        console.log(`EL REPARTIDOR PASO A RECOGER EL PEDIDO ${order.id} Y HA CAMBIADO SU ESTADO A ENVIADO`);
    }, 20000);

    context.response.body = {
        success: true,
        data: order
    };
}

export { getIndex, getMenus, getOrder, createOrder };