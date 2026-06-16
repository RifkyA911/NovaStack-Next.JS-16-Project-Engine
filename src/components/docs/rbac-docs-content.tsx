"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Copy, Check, Book, Code, Shield } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function RbacDocsContent() {
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
          <span className="font-semibold">Components</span>
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
            <a href="/docs/features/rbac" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
              RBAC
            </a>
            <a href="/docs/features/dashboard" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Dashboard
            </a>
            <a href="/docs/features/auth" className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
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
              <span className="font-medium">RBAC</span>
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
            <h1 className="text-4xl font-bold mb-4">Role-Based Access Control</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Role-Based Access Control middleware for protecting routes based on user roles and permissions.
            </p>
          </div>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Key capabilities of the RBAC middleware</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Role-Based Protection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Restrict routes based on user roles
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5 text-green-500" />
                    Forbidden Routes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Configure specific routes that each role cannot access
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Book className="h-5 w-5 text-purple-500" />
                    Wildcard Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Allow full access with wildcard character
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-500" />
                    Automatic Redirects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Redirect unauthorized users to appropriate pages
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Role Configuration</CardTitle>
              <CardDescription>Configure role permissions in middleware</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`const userForbiddenRoutes: Record<string, string[]> = {
  administrator: ["!"], // "!" means all routes allowed
  user: ["/dashboard/users"], // user forbidden from these routes
  guest: ["/dashboard"], // guest forbidden from dashboard
};`}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => copyCode("roles", `const userForbiddenRoutes: Record<string, string[]> = {
  administrator: ["!"], // "!" means all routes allowed
  user: ["/dashboard/users"], // user forbidden from these routes
  guest: ["/dashboard"], // guest forbidden from dashboard
};`)}
                >
                  {copiedCode === "roles" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>How to use the RBAC middleware</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Basic Setup</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { rbacMiddleware } from "@/middlewares/role";

export default function middleware(req: NextRequest) {
  // Apply RBAC to dashboard routes
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return rbacMiddleware(req);
  }

  return NextResponse.next();
}`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode("basic", `import { rbacMiddleware } from "@/middlewares/role";

export default function middleware(req: NextRequest) {
  // Apply RBAC to dashboard routes
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return rbacMiddleware(req);
  }

  return NextResponse.next();
}`)}
                    >
                      {copiedCode === "basic" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Redirect Behavior */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Redirect Behavior</CardTitle>
              <CardDescription>How unauthorized access is handled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Unauthenticated</h4>
                  <p className="text-sm text-muted-foreground">→ /auth/login</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Forbidden</h4>
                  <p className="text-sm text-muted-foreground">→ /errors/403</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Authorized</h4>
                  <p className="text-sm text-muted-foreground">→ Continue to requested route</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using RBAC effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Principle of least privilege</strong> - Give users only the access they need</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Regular audits</strong> - Review and update role permissions regularly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Clear definitions</strong> - Document what each role can and cannot do</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>RBAC Middleware - Part of Next.JS Project Engine</p>
            <p className="mt-1">Status: Production Ready</p>
          </div>
        </div>
      </main>
    </div>
  );
}
