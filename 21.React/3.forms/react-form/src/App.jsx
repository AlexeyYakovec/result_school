// src/App.jsx
import NativeRegistrationForm from "./components/NativeRegistrationForm/NativeRegistrationForm";
import HookFormRegistration from "./components/HookFormRegistration/HookFormRegistration";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <div className="forms-wrapper">
                <NativeRegistrationForm />
                <HookFormRegistration />
            </div>
        </div>
    );
}

export default App;
