"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/authContext";
import { Button, TextField } from "@mui/material";

function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { login } = useAuthContext();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await fetch(
            "https://librarify.latteandfront.es/api/login_check",
            {
                method: "POST",
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            }
        );

        if (!response.ok) {
            console.log("Error");
            return
        }

        const tokens = await response.json();
        login(tokens);

        return router.push("/admin");
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <main className="flex flex-col  items-center justify-center w-full flex-1 px-20 text-center">

                <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl"> {/** Login secction*/}

                    <div className="w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="text-violet-500">KaBanuc</span>
                        </div>
                        <div className="pt-10">
                            <h2 className="text-3xl font-bold text-violet-500 mb-2">Hola inicia sesion en tu cuenta</h2>
                            <div className="border-2 w-10 border-violet-500 inline-block mb-2"></div>
                        </div>
                        <p className="text-gray-400">Ingresa con tu email y contraseña</p>
                        <div className="flex flex-col items-center">
                            <form onSubmit={handleSubmit} className="form">
                                <TextField
                                    id="outlined-basic"
                                    label="Cuenta"
                                    variant="outlined"
                                    className="w-3/4 py-2"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    className="w-3/4 pb-4"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </form>
                        </div>
                        <Button variant="outlined" className="border-violet-500 rounded-full text-violet text-ellipsis font-semibold">Iniciar session</Button>
                    </div>

                    <div className="w-2/5 bg-violet-900 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"> {/** Register */}
                        <h2 className="text-3xl font-bold mb-2">Registrate</h2>
                        <div className="border-2 w-10  inline-block mb-2"></div>
                        <p className="mb-10">Si aun no cuentas con una cuenta registrate totalmente gratis</p>
                        <Button variant="outlined" className="border-white rounded-full text-white text-ellipsis font-semibold">Crear cuenta</Button>
                    </div>
                </div>


            </main>
        </div>
    );
}

export default Page;