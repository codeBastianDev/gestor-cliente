export async function getCustomer() {
    const res = await fetch("http://localhost:3001/clientes",{ cache: 'no-store' });
    const customer = await res.json();
    return customer;
}

export async function getCustomerById(id) {
    const res = await fetch(`http://localhost:3001/clientes/${id}`, { cache: 'no-store' });

    // En caso de no encontrar el cliente, devolver un objeto vacío
    if (res.status === 404) {
        return {};
    } 

    const customer = await res.json();
    return customer;
}