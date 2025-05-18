import  FormCustomer from "@/components/form-customer";
import { getCustomerById } from "@/lib/customer";

export default async function customer({params}) {
    const { id } = params;
    const customer = await getCustomerById(id)
    return (
        <div>
           <FormCustomer data={customer} />
        </div>
    )
}