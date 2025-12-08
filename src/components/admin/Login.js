import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Card from '../Card';
import { useTheme } from '../../hooks/useTheme';
import Button from '../Button';
// Import the initialized app to ensure Firebase is ready
import '../../firebase';
import { Link } from 'gatsby';

const Login = ({ setIsAuthenticated }) => {
  const { themeStyles } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If successful, set authenticated state
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-20 pb-20">
      <div className="container mx-auto px-8">
        <div className="max-w-md mx-auto">
          <Card className="text-center">
            <h2 className={`text-2xl font-bold mb-6 ${themeStyles.textSecondary}`}>Admin Access</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Admin Email"
                className={`p-3 rounded border ${themeStyles.text} bg-transparent`}
                style={{ borderColor: 'currentColor' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={`p-3 rounded border ${themeStyles.text} bg-transparent`}
                style={{ borderColor: 'currentColor' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button size="default" type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Enter'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Login;
