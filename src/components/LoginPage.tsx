import React, { useState } from 'react';
import { Eye, EyeOff, BookOpen, Loader2, AlertCircle } from 'lucide-react';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginPageProps {
  onLogin: (token: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user starts typing
    if (error) setError('');
    if (name === 'email' && emailError) setEmailError('');
    
    // Real-time email validation
    if (name === 'email' && value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setEmailError('');

    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Dummy login validation
      const validEmail = 'contact@edhub360.com';
      const validPassword = '123456';
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (formData.email === validEmail && formData.password === validPassword) {
        // Generate fake JWT token
        const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb250YWN0QGVkaHViMzYwLmNvbSIsIm5hbWUiOiJFZGh1YjM2MCBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.dummy_signature_for_demo';
        
        // Store JWT token
        localStorage.setItem('auth_token', fakeToken);
        localStorage.setItem('user_email', formData.email);
        
        // Call parent component's login handler
        onLogin(fakeToken);
      } else {
        throw new Error('Invalid email or password. Use contact@edhub360.com / 123456');
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl mb-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edhub360</h1>
          <p className="text-gray-600 text-sm">Education without limits.</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
            
            {/* Demo Credentials Info */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800 font-medium mb-1">Demo Credentials:</p>
              <p className="text-xs text-blue-700">Email: contact@edhub360.com</p>
              <p className="text-xs text-blue-700">Password: 123456</p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  emailError ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
                required
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle forgot password
                }}
              >
                Forgot your password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading || !!emailError}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle sign up navigation
                }}
              >
                Sign up for free
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}