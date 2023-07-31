"use client";

import { FormEvent, useState } from "react";
import Logo from "../generals/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const signInResponse = await signIn("credentials", {
            name,
            password,
            redirect: false,
            callbackUrl: "/home",
        });

        if (signInResponse?.error) {
            setError(signInResponse.error);
        }
    };

    return (
        <div className="flex flex-col items-center gap-y-16 justify-center h-full w-full">
            <Logo />
            <form
                action=""
                className="auth_container"
                onSubmit={(event) => handleLogin(event)}
            >
                <h1 className="font-extrabold text-3xl mb-2">Login</h1>
                <p className="font-semibold text-gray-600 mb-6">
                    Add Add your details below to get back into the app.
                </p>

                <label htmlFor="">Name:</label>
                <div className="input_field">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                        type="text"
                        onChange={(e) => {
                            setError(null);
                            setName(e.target.value);
                        }}
                    />
                </div>

                <label htmlFor="">Password:</label>
                <div className="input_field">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                        type="password"
                        onChange={(e) => {
                            setError(null);
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                {error && <p className="error">{error}</p>}
                <button className="button_default w-full">Login</button>

                <p className="block mt-2">
                    Dont have an account yet?{" "}
                    <Link
                        className="font-semibold text-gray-800 hover:underline"
                        href={"/register"}
                    >
                        Create One
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
