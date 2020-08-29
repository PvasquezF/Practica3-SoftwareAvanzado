import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { menu } from './menu.ts';
export enum states {
    'RECIBIDO',
    'PREPARANDO',
    'LISTO',
    'ENVIADO',
    'ENTREGADO'
}

interface order {
    id: string,
    state: states,
    state_name: string,
    menu: menu,
    created_at: Date
}

export const orders: Array<order> = [];
// for(let i = 0; i < 5; i++){
//     orders.push({
//         id: v4.generate(),
//         state: states.RECIBIDO,
//         created_at: new Date()
//     })
// }
