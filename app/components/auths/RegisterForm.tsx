"use client";

import { FormEvent, useState } from "react";
import Logo from "../generals/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setCofirmedPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password,
                confirmedPassword: confirmedPassword,
            }),
        });

        if (response.ok) {
            const signInResponse = await signIn("credentials", {
                name: name,
                password: password,
                redirect: false,
                callbackUrl: "/home",
            });
            if (signInResponse?.error) {
                setError(signInResponse.error);
            }
        } else {
            const data = await response.json();
            setError(data);
        }
    };

    return (
        <div className="flex flex-col items-center gap-y-16 justify-center h-full">
            <Logo />
            <form
                action=""
                className="auth_container"
                onSubmit={(event) => handleRegister(event)}
            >
                <h1 className="font-extrabold text-3xl mb-2">Register</h1>
                <p className="font-semibold text-gray-600 mb-6">
                    Lets get you started sharing your links!
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

                <label htmlFor="">Cofirmed Password:</label>
                <div className="input_field">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                        type="password"
                        onChange={(e) => {
                            setError(null);
                            setCofirmedPassword(e.target.value);
                        }}
                    />
                </div>

                {error && <p className="error">{error}</p>}
                <button className="button_default w-full">Register</button>

                <p className="block mt-2">
                    Already have an account?{" "}
                    <Link
                        className="font-semibold text-gray-800 hover:underline"
                        href={"/"}
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;
