"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Copy, Check, Book, Code, Zap, LayoutDashboard, Users, Package, ShoppingCart } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function DashboardDocsContent() {
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
            <a href="/docs/features/dashboard" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
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
              <span className="font-medium">Dashboard</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Feature</Badge>
              <Badge variant="outline">Admin Panel</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">Dashboard / Admin Panel</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive dashboard and admin panel system with multiple modules for managing your application.
            </p>
          </div>

          {/* Available Modules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Available Modules</CardTitle>
              <CardDescription>Dashboard modules for different administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5 text-blue-500" />
                    Dashboard Overview
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Statistics, recent orders, activity feed, and quick stats
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Statistics</Badge>
                    <Badge variant="outline" className="text-xs">Charts</Badge>
                    <Badge variant="outline" className="text-xs">Activity Feed</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Book className="h-5 w-5 text-green-500" />
                    Inbox Module
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Message management with filtering and bulk actions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Messages</Badge>
                    <Badge variant="outline" className="text-xs">Filtering</Badge>
                    <Badge variant="outline" className="text-xs">DataTable</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="h-5 w-5 text-purple-500" />
                    Inventory Module
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Product inventory management with stock tracking
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Products</Badge>
                    <Badge variant="outline" className="text-xs">Stock</Badge>
                    <Badge variant="outline" className="text-xs">Categories</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-orange-500" />
                    Orders Module
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Order management with status tracking
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Orders</Badge>
                    <Badge variant="outline" className="text-xs">Status</Badge>
                    <Badge variant="outline" className="text-xs">History</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-red-500" />
                    Users Module
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    User management with role assignment
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Users</Badge>
                    <Badge variant="outline" className="text-xs">Roles</Badge>
                    <Badge variant="outline" className="text-xs">Profile</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5 text-cyan-500" />
                    Reports & Settings
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Sales reports and application settings
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Reports</Badge>
                    <Badge variant="outline" className="text-xs">Analytics</Badge>
                    <Badge variant="outline" className="text-xs">Settings</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Dashboard Components</CardTitle>
              <CardDescription>Reusable components for dashboard layout</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Dashboard Container</h4>
                  <p className="text-sm text-muted-foreground">Main container for responsive layout</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Dashboard Navbar</h4>
                  <p className="text-sm text-muted-foreground">Top navigation with user menu and notifications</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Dashboard Sidebar</h4>
                  <p className="text-sm text-muted-foreground">Side navigation with module menu</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Dashboard Footer</h4>
                  <p className="text-sm text-muted-foreground">Footer with copyright and links</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>How to use the dashboard system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Access Dashboard</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`// Navigate to dashboard
<Link href="/dashboard">Dashboard</Link>

// Protected by RBAC middleware
// Users must have appropriate role to access`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode("access", `// Navigate to dashboard
<Link href="/dashboard">Dashboard</Link>

// Protected by RBAC middleware
// Users must have appropriate role to access`)}
                    >
                      {copiedCode === "access" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Module Integration with DataTable</p>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { DataTable } from "@/components/organisms/@tanstack-react-table/data-table";

const columns = [
  createColumn("id", "ID", "id"),
  createSortableColumn("name", "Name", "name"),
];

<DataTable
  tableName="users"
  columns={columns}
  data={users}
  enableRowSelection={true}
  enableColumnVisibility={true}
/>`}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyCode("datatable", `import { DataTable } from "@/components/organisms/@tanstack-react-table/data-table";

const columns = [
  createColumn("id", "ID", "id"),
  createSortableColumn("name", "Name", "name"),
];

<DataTable
  tableName="users"
  columns={columns}
  data={users}
  enableRowSelection={true}
  enableColumnVisibility={true}
/>`)}
                    >
                      {copiedCode === "datatable" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Common Features</CardTitle>
              <CardDescription>Features available across all dashboard modules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Data Tables</h4>
                  <p className="text-sm text-muted-foreground">Consistent data display with DataTable</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Search & Filter</h4>
                  <p className="text-sm text-muted-foreground">Built-in search and filtering</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Pagination</h4>
                  <p className="text-sm text-muted-foreground">Server-side and client-side pagination</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Row Actions</h4>
                  <p className="text-sm text-muted-foreground">Context menu for each row</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Bulk Operations</h4>
                  <p className="text-sm text-muted-foreground">Select multiple rows for actions</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold mb-1">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">Mobile-friendly interface</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips for using the dashboard effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Use DataTable</strong> - Always use the DataTable component for data display</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Consistent Layout</strong> - Follow the established layout pattern</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Error Handling</strong> - Implement proper error handling for API calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span><strong>Loading States</strong> - Show loading indicators during data fetch</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>Dashboard / Admin Panel - Part of NovaStack</p>
            <p className="mt-1">Status: Alpha Stage - Modules are functional but may change</p>
          </div>
        </div>
      </main>
    </div>
  );
}
