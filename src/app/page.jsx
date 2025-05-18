import LoginForm from "@/components/login-form";
import Imagen from "next/image";

export default function Page() {
    return (
       <div className="flex min-h-screen items-center justify-center bg-gray-100"> 
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                  <Imagen
                    src={"/img/logo.png"}
                    width={100}
                    height={100} 
                    alt="Logo de la empresa"
                    className="mx-auto"
                  />
              <div className="text-center">
                <h1 className="text-2xl font-bold text-sky-700">Dominicana Compañía de Seguros</h1>
              </div>
              <LoginForm />
            </div>
        </div>
    );
}