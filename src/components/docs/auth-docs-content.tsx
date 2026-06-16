"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Copy, Check, Book, Code, Shield, Lock, Key } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function AuthDocsContent() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (codeId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(codeId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 fixed left-0 top-0 h-full bg-white dark:bg-slate-900 border-r p-4 overflow-y-auto hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <Book className="h-5 w-5 text-blue-500" />
          <span className="font-semibold">NovaStack - Docs</span>
        </div>
        <nav className="space-y-2">
          <a href="/docs" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Overview
          </a>
          <div className="pt-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground mb-2">COMPONENTS</p>
            <a href="/docs/datatable" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              DataTable
            </a>
            <a href="/docs/form" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              DialogForm
            </a>
          </div>
          <div className="pt-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground mb-2">FEATURES</p>
            <a href="/docs/features/middleware" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Middleware
            </a>
            <a href="/docs/features/logger" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Logger
            </a>
            <a href="/docs/features/rbac" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              RBAC
            </a>
            <a href="/docs/features/dashboard" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Dashboard
            </a>
            <a href="/docs/features/auth" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
              Authentication
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Header with Theme Toggle */}
        <div className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm border-b">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Components
              </a>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Authentication</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Feature</Badge>
              <Badge variant="outline">Security</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">Authentication Configuration</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Complete authentication system using NextAuth.js with multiple providers and custom pages.
            </p>
          </div>

          {/* Available Auth Pages */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Available Auth Pages</CardTitle>
              <CardDescription>Authentication pages and their features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-500" />
                    Login Page
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Email/password authentication with Google OAuth
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Credentials</Badge>
                    <Badge variant="outline" className="text-xs">Google OAuth</Badge>
                    <Badge variant="outline" className="text-xs">Remember Me</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Key className="h-5 w-5 text-green-500" />
                    Register Page
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    User registration with validation and reCAPTCHA
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Validation</Badge>
                    <Badge variant="outline" className="text-xs">reCAPTCHA</Badge>
                    <Badge variant="outline" className="text-xs">Email Verification</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-500" />
                    Forgot Password
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Password reset request with email flow
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Reset Flow</Badge>
                    <Badge variant="outline" className="text-xs">Email</Badge>
                    <Badge variant="outline" className="text-xs">Token</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5 text-orange-500" />
                    Error Page
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Authentication error display with retry options
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Error Handling</Badge>
                    <Badge variant="outline" className="text-xs">Support</Badge>
                    <Badge variant="outline" className="text-xs">Retry</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environment Variables */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
              <CardDescription>Required configuration for authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">NEXTAUTH_SECRET='supersecretkey'</code>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">NEXTAUTH_URL='http://localhost:3000'</code>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">GOOGLE_CLIENT_ID=xxxxx</code>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">GOOGLE_CLIENT_SECRET=xxxxx</code>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY='your-key'</code>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">RECAPTCHA_V3_SECRET_KEY='your-key'</code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Authentication Flow */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Authentication Flow</CardTitle>
              <CardDescription>How authentication works in the application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">1. Login Flow</h4>
                  <p className="text-sm text-muted-foreground">
                    User enters credentials → NextAuth authenticates → JWT token created → Redirect to dashboard → RBAC checks permissions
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">2. Registration Flow</h4>
                  <p className="text-sm text-muted-foreground">
                    User fills form → Validation & reCAPTCHA → Account created → Email verification → User can login
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">3. Password Reset Flow</h4>
                  <p className="text-sm text-muted-foreground">
                    User enters email → Reset token generated → Email sent → User clicks link → New password set
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Security Features</CardTitle>
              <CardDescription>Built-in security measures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">reCAPTCHA Integration</h4>
                  <p className="text-sm text-muted-foreground">v3 primary, v2 fallback with server verification</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Password Security</h4>
                  <p className="text-sm text-muted-foreground">bcrypt hashing with strength requirements</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Token Security</h4>
                  <p className="text-sm text-muted-foreground">JWT with environment-based secret</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Session Management</h4>
                  <p className="text-sm text-muted-foreground">Secure session handling with expiration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RBAC Integration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>RBAC Integration</CardTitle>
              <CardDescription>How authentication works with role-based access control</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Role assignment during registration
const user = await createUser({
  email,
  password,
  role: 'user', // or 'administrator', 'moderator'
});

// Role added to JWT token
callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.role = user.role;
    }
    return token;
  },
}`}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => copyCode("rbac", `// Role assignment during registration
const user = await createUser({
  email,
  password,
  role: 'user', // or 'administrator', 'moderator'
});

// Role added to JWT token
callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.role = user.role;
    }
    return token;
  },
}`)}
                >
                  {copiedCode === "rbac" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Security and implementation tips</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Environment Variables</strong> - Never commit secrets to version control</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Strong Passwords</strong> - Enforce strong password requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>HTTPS</strong> - Always use HTTPS in production</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Rate Limiting</strong> - Implement rate limiting on auth endpoints</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>Authentication Configuration - Part of NovaStack</p>
            <p className="mt-1">Status: Production Ready</p>
          </div>
        </div>
      </main>
    </div>
  );
}
