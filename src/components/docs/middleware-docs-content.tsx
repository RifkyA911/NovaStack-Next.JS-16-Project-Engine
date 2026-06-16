"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Copy, Check, Book, Code, Zap, Shield } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function MiddlewareDocsContent() {
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
            <a href="/docs/features/middleware" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
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
              <span className="font-medium">Middleware</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Feature</Badge>
              <Badge variant="outline">Production Ready</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">Middleware System</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive middleware system for Next.js application with authentication, logging, RBAC, and robot control features.
            </p>
          </div>

          {/* Available Middleware */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Available Middleware</CardTitle>
              <CardDescription>Four middleware functions for different security and functionality needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Authentication Middleware
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Handles authentication using NextAuth.js with custom page redirects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">NextAuth</Badge>
                    <Badge variant="outline" className="text-xs">JWT</Badge>
                    <Badge variant="outline" className="text-xs">Redirects</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Book className="h-5 w-5 text-green-500" />
                    Logger Middleware
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Request logging with performance tracking and IP extraction
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Request Logging</Badge>
                    <Badge variant="outline" className="text-xs">Performance</Badge>
                    <Badge variant="outline" className="text-xs">Optional</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    Robot Control Middleware
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    SEO and robot control using X-Robots-Tag headers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">SEO</Badge>
                    <Badge variant="outline" className="text-xs">X-Robots-Tag</Badge>
                    <Badge variant="outline" className="text-xs">Indexing Control</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5 text-red-500" />
                    RBAC Middleware
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Role-Based Access Control for route protection
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Role Protection</Badge>
                    <Badge variant="outline" className="text-xs">Forbidden Routes</Badge>
                    <Badge variant="outline" className="text-xs">Wildcard</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get started with middleware in your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">1. Import middleware functions</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { logMiddleware } from "@/middlewares/logger";
import { rbacMiddleware } from "@/middlewares/role";
import { robotConfig } from "@/middlewares/robot";`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode("import", `import { logMiddleware } from "@/middlewares/logger";
import { rbacMiddleware } from "@/middlewares/role";
import { robotConfig } from "@/middlewares/robot";`)}
                    >
                      {copiedCode === "import" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">2. Compose middleware in your main middleware file</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  // Apply logger
  await logMiddleware(req, event);

  // Apply robot control
  const robotResponse = robotConfig(req);
  if (robotResponse) return robotResponse;

  // Apply RBAC for protected routes
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
                      onClick={() => copyCode("compose", `export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  // Apply logger
  await logMiddleware(req, event);

  // Apply robot control
  const robotResponse = robotConfig(req);
  if (robotResponse) return robotResponse;

  // Apply RBAC for protected routes
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return rbacMiddleware(req);
  }

  return NextResponse.next();
}`)}
                    >
                      {copiedCode === "compose" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environment Variables */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
              <CardDescription>Required configuration for middleware</CardDescription>
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
                  <code className="text-sm">LOGGER_ENABLED=false</code>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <code className="text-sm">LOGGER_LEVEL=info</code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using middleware effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Order matters</strong> - Apply middleware in the correct order (logger first, then security checks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Performance</strong> - Use async operations appropriately to avoid blocking requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Security</strong> - Always validate tokens and check permissions before allowing access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Logging</strong> - Keep logger disabled in production unless needed for debugging</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>Middleware System - Part of Next.JS Project Engine</p>
            <p className="mt-1">Status: Production Ready</p>
          </div>
        </div>
      </main>
    </div>
  );
}
