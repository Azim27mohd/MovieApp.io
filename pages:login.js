// pages/login.js
import { signIn } from 'next-auth/react';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('credentials', { redirect: false })}>
        Sign in as Admin
      </button>
    </div>
  );
}

export default LoginPage;