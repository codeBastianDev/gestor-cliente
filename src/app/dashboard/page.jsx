import  {getCustomer}  from "@/lib/customer"
import  TableCustomer  from "@/components/table-customer";
import ClientesLoading from "@/components/loading-customer";
import { Suspense } from "react";

export default async function page() {
    // Emulando un delay de 2 segundos
    // await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const customer = await getCustomer();
    return (
        <Suspense fallback={<ClientesLoading />}>
          <TableCustomer customer={customer} />
        </Suspense>
    )
}