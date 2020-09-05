// @ts-nocheck
const getIndex = (context: any) => {
    context.response.body = "Hello world!";
}

const getOrderState = async (context: any) => {
    let result = null;
    if (context.params && context.params.id) {
        result = await fetch('http://localhost:8003/api/v1/esb/getorder/'+context.params.id, {
            method: 'GET'
        }).catch(m => {
            console.log(m);
        });
    }
    if (result) {
        result = await result.json();
        context.response.body = {
            success: true,
            data: result.data
        };
    } else {
        context.response.body = {
            success: false,
            error: {
                errors: [
                    `No se ha podido obtener el pedido ingresado.`
                ]
            }
        }
    }
}

const pickupOrder = async (context: any) => {
    let result = null;
    if (context.params && context.params.id) {
        result = await fetch('http://localhost:8003/api/v1/esb/recieveorder/'+context.params.id, {
            method: 'GET'
        }).catch(m => {
            console.log(m);
        });
    }
    
    result = await result.json();

    if (!result.success) {
        context.response.body = {
            success: false,
            error: {
                errors: [
                    `Ha ocurrido un error al recibir la orden.`
                ]
            }
        }
    } else {
        console.log(result);
        context.response.body = {
            success: true,
            data: result['data']
        };
    }
}

const deliveryOrder = async (context: any) => {
    let result = null;
    if (context.params && context.params.id) {
        result = await fetch('http://localhost:8003/api/v1/esb/deliverorder/'+context.params.id, {
            method: 'GET'
        }).catch(m => {
            console.log(m);
        });
    }

    if (!result) {
        context.response.body = {
            success: false,
            error: {
                errors: [
                    `Ha ocurrido un error al recibir la orden.`
                ]
            }
        }
    } else {
        result = await result.json();

        context.response.body = {
            success: true,
            data: result['data']
        };
    }
}

export { pickupOrder, getOrderState, deliveryOrder };