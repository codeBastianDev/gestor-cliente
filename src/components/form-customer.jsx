"use client"
import { Input } from "./ui/input";
import {Card, CardContent,CardFooter,CardHeader} from "@/components/ui/card";
import { Button } from "./ui/button";
import  {useState,useEffect}  from "react";
import { useRouter } from "next/navigation";

export default function FormCustomer({ data }) {

    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");

    useEffect(() => {
        if (data) {
            setNombre(data.nombre);
            setDireccion(data.direccion);
        }
    }, [data]);


    const handleSubmit =  (e) => {
        e.preventDefault();
        if(!nombre || !direccion) {
            alert("Por favor completa todos los campos");
            return;
        }
        const customer = {
            nombre: nombre,
            direccion: direccion
        }

        const isEdit = data?.id ;
        const url = isEdit 
        ? `http://localhost:3001/clientes/${data.id}` 
        : "http://localhost:3001/clientes";
     
        fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
        });

        router.push("/dashboard");
    }
    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader className="font-medium">Creacion de Cliente</CardHeader>
                <CardContent>
                <Input
                    type="text"
                    placeholder="Cliente"
                    className="mb-4"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    required />
                <Input
                    type="text"
                    placeholder="Dirección"
                    className="mb-4"
                    onChange={(e) => setDireccion(e.target.value)}
                    value={direccion}
                    required/>
                <Button type="submit" className={"w-full "}>Agregar</Button>
                </CardContent>
            </Card>
        </form>
    );
}