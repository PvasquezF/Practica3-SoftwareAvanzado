// @ts-nocheck
const createOrder = async (context: any) => {
    let result = null;
    // TODO El usuario creara la orden y redirige al microservicio de restaurante
}

const getOrder = async (context: any) => {
    let result = null;
    // TODO Obtener la orden
}

const recieveOrderToDeliver = async (context: any) => {
    // TODO Entregar orden al repartidor
}

const deliveryOrder = async (context: any) => {
    // TODO Entregar orden al cliente
}

export { pickupOrder, getOrderState, deliveryOrder };