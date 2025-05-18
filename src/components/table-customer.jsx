"use client"	

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Input } from "./ui/input"
import { EllipsisIcon } from "lucide-react"
import { useState } from "react"
import { CirclePlus } from "lucide-react"
import Link from "next/link"

export default function TableCustomer({customer}) {
  const [seach, setSeach] = useState("");

  const filterCustomer = customer.filter((item) => {
    return item.nombre.toLowerCase().includes(seach.toLowerCase());
  })

  function deleteCustomer(id) {
    fetch(`http://localhost:3001/clientes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
   
    alert("Cliente eliminado");  
    window.location.reload();
  }

  return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Cliente</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-4">
            <Input
              type="seach"
              placeholder="Buscar Cliente...."
              onChange={(e) => setSeach(e.target.value)}
              value={seach}
            />
          <Link href="dashboard/customer/0">
            <button className="bg-sky-700 p-2 rounded-md text-white hover:bg-sky-900 cursor-pointer">
              <CirclePlus/>
            </button>
          </Link>
        </CardContent>

        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Dirección</TableHead>
                  <TableHead className="text-right">Opciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filterCustomer.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.nombre}</TableCell>
                    <TableCell>{item.direccion}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisIcon/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Opcciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <Link href={`dashboard/customer/${item.id}`}><DropdownMenuItem> Editar </DropdownMenuItem></Link>
                          <DropdownMenuItem onClick={()=>{ deleteCustomer(item.id)}}>Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>

      </Card>
  )
}