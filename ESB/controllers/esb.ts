// @ts-nocheck
const createOrder = async (context: any) => {
    let result = null;
    // TODO El usuario creara la orden y redirige al microservicio de restaurante+
    const body = await context.request.body();
    const menuid: any = body.value.menu;
    result = await fetch('http://localhost:8000/api/v1/restaurant/orders', {
        body: JSON.stringify({
            menu: menuid
        }),
        method: 'POST'
    }).catch(m => {
        console.log(m);
    });

    context.response.body = await result.json();
}

const getOrder = async (context: any) => {
    let result = null;
    // TODO Obtener la orden
    if (context.params && context.params.id) {
        result = await fetch('http://localhost:8000/api/v1/restaurant/orders/'+context.params.id, {
            method: 'GET'
        }).catch(m => {
            console.log(m);
        });
    }
    context.response.body = await result.json();
}

const recieveOrderToDeliver = async (context: any) => {
    // TODO Entregar orden al repartidor
    let result = null;
    if (context.params && context.params.id) {
        result = await fetch('http://localhost:8000/api/v1/restaurant/sendorder/'+context.params.id, {
            method: 'GET'
        }).catch(m => {
            console.log(m);
        });
    }
    
    context.response.body = await result.json();
}

const deliveryOrder = async (context: any) => {
    // TODO Entregar orden al cliente
    let result = null;
    if (context.params && context.params.id) {
        result = await fetch('http://localhost:8000/api/v1/restaurant/deliverorder/'+context.params.id, {
            method: 'GET'
        }).catch(m => {
            console.log(m);
        });
    }

    context.response.body = await result.json();
}

export { createOrder, getOrder, recieveOrderToDeliver, deliveryOrder };