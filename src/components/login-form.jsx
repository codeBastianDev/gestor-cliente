"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Card,CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    
    const submit = function handleSubmit(event) {
        event.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        if(!email || !password) {
            alert("Por favor, completa todos los campos.");
            return setError("Por favor, completa todos los campos.");
        }

        router.push("/dashboard");
    }

    return(
        <Card>
            <CardContent>
                <form onSubmit={submit}  className="space-y-4">
                    <div className="space-y-4">
                        <Label>Email</Label>
                        <div>
                            <Input 
                                type="email"
                                placeholder="nombre@gmail.com"
                                required
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Label>Contraseña</Label>
                        <div>
                            <Input 
                                type="password"
                                placeholder="********"
                                required  
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-sky-700 p-5 hover:bg-sky-900 cursor-pointer">
                        Iniciar sesión en la cuenta
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}