import AuthRoute from "../components/auths/AuthRoute";
import RegisterForm from "../components/auths/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="flex h-full justify-center items-center">
            <AuthRoute>
                <RegisterForm />
            </AuthRoute>
        </div>
    );
};

export default RegisterPage;
