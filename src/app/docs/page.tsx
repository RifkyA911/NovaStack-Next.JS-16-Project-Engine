"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ChevronRight, Zap, Shield, LayoutDashboard, Lock as LockIcon } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 fixed left-0 top-0 h-full bg-white dark:bg-slate-900 border-r p-4 overflow-y-auto hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <Book className="h-5 w-5 text-blue-500" />
          <span className="font-semibold">NovaStack - Docs</span>
        </div>
        <nav className="space-y-2">
          <a href="/docs" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
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
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Components</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Documentation</Badge>
              <Badge variant="outline">Alpha Stage</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">Components Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive documentation for reusable components built on top of shadcn/ui and TanStack libraries.
              These components are designed to be production-ready with enterprise-grade features.
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Zap className="h-8 w-8 text-blue-500" />
                  <Badge variant="secondary">DataTable</Badge>
                </div>
                <CardTitle>DataTable Component</CardTitle>
                <CardDescription>
                  Comprehensive data table with sorting, filtering, pagination, row selection, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col jutify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Sorting</Badge>
                    <Badge variant="outline" className="text-xs">Filtering</Badge>
                    <Badge variant="outline" className="text-xs">Pagination</Badge>
                    <Badge variant="outline" className="text-xs">Row Selection</Badge>
                    <Badge variant="outline" className="text-xs">Column Visibility</Badge>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/docs/datatable">
                      View Documentation
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Shield className="h-8 w-8 text-purple-500" />
                  <Badge variant="secondary">DialogForm</Badge>
                </div>
                <CardTitle>DialogForm Component</CardTitle>
                <CardDescription>
                  Dynamic dialog form with validation, file upload, and multiple field types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col jutify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Validation</Badge>
                    <Badge variant="outline" className="text-xs">File Upload</Badge>
                    <Badge variant="outline" className="text-xs">Dynamic Fields</Badge>
                    <Badge variant="outline" className="text-xs">Zod Integration</Badge>
                    <Badge variant="outline" className="text-xs">TanStack Form</Badge>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/docs/form">
                      View Documentation
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="h-6 w-6 text-orange-500" />
                    <Badge variant="secondary">Middleware</Badge>
                  </div>
                  <CardTitle className="text-lg">Middleware System</CardTitle>
                  <CardDescription className="text-sm">
                    Comprehensive middleware for auth, logging, RBAC, and robot control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Auth</Badge>
                      <Badge variant="outline" className="text-xs">Logger</Badge>
                      <Badge variant="outline" className="text-xs">RBAC</Badge>
                      <Badge variant="outline" className="text-xs">Robot Control</Badge>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/docs/features/middleware">
                        View Documentation
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Book className="h-6 w-6 text-green-500" />
                    <Badge variant="secondary">Logger</Badge>
                  </div>
                  <CardTitle className="text-lg">Request Logger</CardTitle>
                  <CardDescription className="text-sm">
                    HTTP request logging with performance tracking and IP extraction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Request Tracking</Badge>
                      <Badge variant="outline" className="text-xs">Performance</Badge>
                      <Badge variant="outline" className="text-xs">IP Extraction</Badge>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/docs/features/logger">
                        View Documentation
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Shield className="h-6 w-6 text-red-500" />
                    <Badge variant="secondary">RBAC</Badge>
                  </div>
                  <CardTitle className="text-lg">Role-Based Access</CardTitle>
                  <CardDescription className="text-sm">
                    Fine-grained access control with role-based route protection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Role Protection</Badge>
                      <Badge variant="outline" className="text-xs">Forbidden Routes</Badge>
                      <Badge variant="outline" className="text-xs">Wildcard Support</Badge>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/docs/features/rbac">
                        View Documentation
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <LayoutDashboard className="h-6 w-6 text-blue-500" />
                    <Badge variant="secondary">Dashboard</Badge>
                  </div>
                  <CardTitle className="text-lg">Admin Panel</CardTitle>
                  <CardDescription className="text-sm">
                    Full-featured dashboard with inbox, inventory, orders, users, and more
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Inbox</Badge>
                      <Badge variant="outline" className="text-xs">Inventory</Badge>
                      <Badge variant="outline" className="text-xs">Orders</Badge>
                      <Badge variant="outline" className="text-xs">Users</Badge>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/docs/features/dashboard">
                        View Documentation
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <LockIcon className="h-6 w-6 text-purple-500" />
                    <Badge variant="secondary">Authentication</Badge>
                  </div>
                  <CardTitle className="text-lg">Auth Configuration</CardTitle>
                  <CardDescription className="text-sm">
                    NextAuth.js setup with multiple providers and custom pages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">NextAuth</Badge>
                      <Badge variant="outline" className="text-xs">Google OAuth</Badge>
                      <Badge variant="outline" className="text-xs">reCAPTCHA</Badge>
                      <Badge variant="outline" className="text-xs">Custom Pages</Badge>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/docs/features/auth">
                        View Documentation
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Component Features</CardTitle>
              <CardDescription>Common features across all components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    Core Functionality
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Type-safe with TypeScript</li>
                    <li>• Built-in validation</li>
                    <li>• Responsive design</li>
                    <li>• Accessibility compliant</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Enterprise Ready
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Production-tested</li>
                    <li>• Performance optimized</li>
                    <li>• Customizable styling</li>
                    <li>• Comprehensive documentation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Book className="h-4 w-4 text-purple-500" />
                    Developer Experience
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Easy to use</li>
                    <li>• Well-documented</li>
                    <li>• Copy-paste examples</li>
                    <li>• Best practices included</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Getting Started */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Quick start guide for using components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Choose a Component</h4>
                    <p className="text-sm text-muted-foreground">
                      Browse the available components and choose the one that fits your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Read the Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Each component has comprehensive documentation with examples and API reference
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Copy and Customize</h4>
                    <p className="text-sm text-muted-foreground">
                      Use the provided examples as a starting point and customize for your needs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>Next.JS Project Engine - Components Documentation</p>
            <p className="mt-1">Status: Alpha Stage - Components are functional but may change as we refine the API</p>
          </div>
        </div>
      </main>
    </div>
  );
}

