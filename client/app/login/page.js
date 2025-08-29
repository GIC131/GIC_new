// client/app/login/page.js
import AuthRedirect from "@/components/AuthRedirect";
import LoginForm from "@/components/LoginForm"; // We will create this next

const LoginPage = () => {
  return (
    <AuthRedirect>
      <LoginForm />
    </AuthRedirect>
  );
};

export default LoginPage;