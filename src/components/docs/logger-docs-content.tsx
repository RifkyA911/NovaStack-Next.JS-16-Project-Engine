"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Copy, Check, Book, Code, Zap } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function LoggerDocsContent() {
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
            <a href="/docs/features/logger" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
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
              <span className="font-medium">Logger</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Feature</Badge>
              <Badge variant="outline">Optional</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">Request Logger</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Request logging middleware for tracking HTTP requests, responses, and performance metrics.
            </p>
          </div>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Key capabilities of the logger middleware</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-500" />
                    Request Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Logs all HTTP requests with detailed metadata
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5 text-green-500" />
                    Performance Monitoring
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tracks request duration for performance analysis
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Book className="h-5 w-5 text-purple-500" />
                    IP Extraction
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Extracts client IP addresses from headers
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    Asynchronous Logging
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Non-blocking logging to avoid performance impact
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Environment variables for logger control</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Environment Variables</p>
                  <div className="space-y-2">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <code className="text-sm">LOGGER_ENABLED=false</code>
                      <p className="text-xs text-muted-foreground mt-1">Default: false (disabled by default)</p>
                    </div>
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <code className="text-sm">LOGGER_LEVEL=info</code>
                      <p className="text-xs text-muted-foreground mt-1">Options: debug, info, warn, error</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Enable Logger</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`# .env
LOGGER_ENABLED=true`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode("enable", `# .env
LOGGER_ENABLED=true`)}
                    >
                      {copiedCode === "enable" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>How to use the logger middleware</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Basic Setup</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { logMiddleware } from "@/middlewares/logger";

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  return logMiddleware(req, event);
}`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode("basic", `import { logMiddleware } from "@/middlewares/logger";

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  return logMiddleware(req, event);
}`)}
                    >
                      {copiedCode === "basic" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logged Data */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Logged Data</CardTitle>
              <CardDescription>Information captured for each request</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`{
  method: "GET",
  url: "http://localhost:3000/api/users",
  ip: "192.168.1.1",
  ts: "2024-01-15T10:30:00.000Z",
  status: 200,
  duration: 45
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Performance Impact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Performance Impact</CardTitle>
              <CardDescription>Performance considerations for the logger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">When Disabled (Default)</h4>
                  <p className="text-sm text-muted-foreground">No impact - middleware returns immediately</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">When Enabled</h4>
                  <p className="text-sm text-muted-foreground">Minimal impact (~1-2ms per request) with asynchronous logging</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using the logger effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Disable in production</strong> - Keep logger disabled unless needed for debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Use sampling</strong> - For high-traffic sites, consider sampling (log only X% of requests)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Sensitive data</strong> - Avoid logging personally identifiable information</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>Request Logger - Part of Next.JS Project Engine</p>
            <p className="mt-1">Status: Optional Feature (Disabled by Default)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
