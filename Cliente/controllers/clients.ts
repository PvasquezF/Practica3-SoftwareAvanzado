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

const getNewOrder = async (context: any) => {
    const body = await context.request.body();
    const menuid: any = body.value.menu;
    let result = await fetch('http://localhost:8003/api/v1/esb/createorder', {
        body: JSON.stringify({
            menu: menuid
        }),
        method: 'POST'
    }).catch(m => {
        console.log(m);
    });

    if (!result) {
        context.response.body = {
            success: false,
            error: {
                errors: [
                    `Ha ocurrido un error al procesar la orden.`
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

export { getNewOrder, getOrderState };