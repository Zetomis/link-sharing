import AuthRoute from "./components/auths/AuthRoute";
import LoginForm from "./components/auths/LoginForm";

const App = () => {
    return (
        <div className="flex h-full justify-center items-center">
            <AuthRoute>
                <LoginForm />
            </AuthRoute>
        </div>
    );
};

export default App;
