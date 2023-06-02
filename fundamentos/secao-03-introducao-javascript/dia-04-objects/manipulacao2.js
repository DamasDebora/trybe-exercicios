const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
        marguerita: {
            amount: 1,
            price: 25,
        },
        pepperoni: {
            amount: 1,
            price: 20,
        },
        },
        drinks: {
        coke: {
            type: 'Coca-Cola Zero',
            price: 10,
            amount: 1,
        },
        },
        delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (fullOrder) => {
    const deliveryPerson = fullOrder.order.delivery.deliveryPerson
    const costumer = fullOrder.name
    const phoneNumber = fullOrder.phoneNumber
    const street = fullOrder.address.street
    const addressNumber = fullOrder.address.number
    const apartment = fullOrder.address.apartment

    return `
        Olá, ${deliveryPerson}, 
        entrega para: ${costumer}, 
        Telefone: ${phoneNumber},
        ${street}, Número: ${addressNumber}, Ap: ${apartment}
    `;

}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
}

  console.log(orderModifier(order));