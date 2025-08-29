// client/app/register/page.js
import AuthRedirect from "@/components/AuthRedirect";
import RegisterForm from "@/components/RegisterForm"; // We will create this next

const RegisterPage = () => {
  return (
    <AuthRedirect>
      <RegisterForm />
    </AuthRedirect>
  );
};

export default RegisterPage;