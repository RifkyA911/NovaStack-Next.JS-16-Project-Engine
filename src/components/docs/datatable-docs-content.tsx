"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ChevronDown, Copy, Check, Book, Code, Zap, Shield } from "lucide-react";

export default function DataTableDocsContent() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (codeId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(codeId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Component</Badge>
            <Badge variant="outline">Alpha Stage</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">DataTable Component</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive, reusable data table component built on top of TanStack Table and shadcn/ui. 
            Provides enterprise-grade features for displaying and managing tabular data with minimal setup.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Core Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Sorting - Click column headers to sort</li>
                <li>✅ Filtering - Global search with debounce</li>
                <li>✅ Pagination - Client & server-side</li>
                <li>✅ Row Selection - Single/multiple rows</li>
                <li>✅ Column Visibility - Dynamic show/hide</li>
                <li>✅ Row Actions - Custom dropdown actions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Book className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Visual Enhancements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Striped Rows - Alternating colors</li>
                <li>✅ Hover Effects - Row hover states</li>
                <li>✅ Sticky Headers - Keep headers visible</li>
                <li>✅ Loading States - Built-in skeleton</li>
                <li>✅ Empty States - Custom messages</li>
                <li>✅ Responsive Design - Mobile-friendly</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Advanced Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Zustand Integration - State management</li>
                <li>✅ Toolbar Actions - Custom components</li>
                <li>✅ Server-Side Support - Pagination/filtering</li>
                <li>✅ TypeScript - Full type safety</li>
                <li>✅ Custom Cell Renderers - Flexible content</li>
                <li>✅ Accessibility - WCAG compliant</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get started with DataTable in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">1. Import the component</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`import { DataTable, createColumn, createSortableColumn } from "@/components/organisms/@tanstack-react-table/data-table";`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("import", 'import { DataTable, createColumn, createSortableColumn } from "@/components/organisms/@tanstack-react-table/data-table";')}
                  >
                    {copiedCode === "import" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">2. Define your data type and columns</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const columns = [
  createColumn<User>("id", "ID", "id"),
  createSortableColumn<User>("name", "Name", "name"),
  createColumn<User>("email", "Email", "email"),
  createColumn<User>("role", "Role", "role"),
];`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("columns", `interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const columns = [
  createColumn<User>("id", "ID", "id"),
  createSortableColumn<User>("name", "Name", "name"),
  createColumn<User>("email", "Email", "email"),
  createColumn<User>("role", "Role", "role"),
];`)}
                  >
                    {copiedCode === "columns" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">3. Use the component</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<DataTable
  tableName="users"
  columns={columns}
  data={users}
  searchKey={["name", "email"]}
  searchPlaceholder="Search users..."
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("usage", `<DataTable
  tableName="users"
  columns={columns}
  data={users}
  searchKey={["name", "email"]}
  searchPlaceholder="Search users..."
/>`)}
                  >
                    {copiedCode === "usage" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Props Reference */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Props Reference</CardTitle>
            <CardDescription>All available props for the DataTable component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Prop</th>
                    <th className="text-left p-2 font-medium">Type</th>
                    <th className="text-left p-2 font-medium">Default</th>
                    <th className="text-left p-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">tableName</td>
                    <td className="p-2 text-xs">string</td>
                    <td className="p-2 text-xs">"default"</td>
                    <td className="p-2 text-xs">Unique identifier for Zustand store</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">columns</td>
                    <td className="p-2 text-xs">ColumnDef[]</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Required. Column definitions</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">data</td>
                    <td className="p-2 text-xs">TData[]</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Required. Data array to display</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">searchKey</td>
                    <td className="p-2 text-xs">keyof | Array</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Field(s) to search in</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">pageSize</td>
                    <td className="p-2 text-xs">number</td>
                    <td className="p-2 text-xs">10</td>
                    <td className="p-2 text-xs">Number of rows per page</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">enableRowSelection</td>
                    <td className="p-2 text-xs">boolean</td>
                    <td className="p-2 text-xs">true</td>
                    <td className="p-2 text-xs">Enable row selection checkboxes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">enableSorting</td>
                    <td className="p-2 text-xs">boolean</td>
                    <td className="p-2 text-xs">true</td>
                    <td className="p-2 text-xs">Enable column sorting</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">enableSearch</td>
                    <td className="p-2 text-xs">boolean</td>
                    <td className="p-2 text-xs">true</td>
                    <td className="p-2 text-xs">Enable search input</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">isStriped</td>
                    <td className="p-2 text-xs">boolean</td>
                    <td className="p-2 text-xs">false</td>
                    <td className="p-2 text-xs">Alternate row colors</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">isStickyHeader</td>
                    <td className="p-2 text-xs">boolean</td>
                    <td className="p-2 text-xs">false</td>
                    <td className="p-2 text-xs">Make header sticky</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Examples</CardTitle>
            <CardDescription>Common usage patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="actions">With Actions</TabsTrigger>
                <TabsTrigger value="selection">With Selection</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="mt-4">
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<DataTable
  tableName="products"
  columns={columns}
  data={products}
  searchKey={["name", "category"]}
  searchPlaceholder="Search products..."
  isStriped={true}
  isHoverable={true}
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("basic", `<DataTable
  tableName="products"
  columns={columns}
  data={products}
  searchKey={["name", "category"]}
  searchPlaceholder="Search products..."
  isStriped={true}
  isHoverable={true}
/>`)}
                  >
                    {copiedCode === "basic" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="actions" className="mt-4">
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<DataTable
  tableName="products"
  columns={columns}
  data={products}
  onRowAction={handleRowAction}
  rowActions={[
    {
      label: "View Details",
      value: "view",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      label: "Edit Product",
      value: "edit",
      icon: <Edit className="h-4 w-4" />,
    },
    {
      label: "Delete Product",
      value: "delete",
      icon: <Trash2 className="h-4 w-4" />,
      variant: "destructive",
    },
  ]}
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("actions", `<DataTable
  tableName="products"
  columns={columns}
  data={products}
  onRowAction={handleRowAction}
  rowActions={[
    {
      label: "View Details",
      value: "view",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      label: "Edit Product",
      value: "edit",
      icon: <Edit className="h-4 w-4" />,
    },
    {
      label: "Delete Product",
      value: "delete",
      icon: <Trash2 className="h-4 w-4" />,
      variant: "destructive",
    },
  ]}
/>`)}
                  >
                    {copiedCode === "actions" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="selection" className="mt-4">
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const [selectedUsers, setSelectedUsers] = useState<Row<User>[]>([]);

const handleSelectionChange = (rows: Row<User>[]) => {
  setSelectedUsers(rows);
  console.log("Selected users:", rows.map(r => r.original));
};

<DataTable
  tableName="users"
  columns={columns}
  data={users}
  enableRowSelection={true}
  onRowSelectionChange={handleSelectionChange}
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("selection", `const [selectedUsers, setSelectedUsers] = useState<Row<User>[]>([]);

const handleSelectionChange = (rows: Row<User>[]) => {
  setSelectedUsers(rows);
  console.log("Selected users:", rows.map(r => r.original));
};

<DataTable
  tableName="users"
  columns={columns}
  data={users}
  enableRowSelection={true}
  onRowSelectionChange={handleSelectionChange}
/>`)}
                  >
                    {copiedCode === "selection" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Live Demo Link */}
        <Card className="mb-8 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-500" />
              Live Demo
            </CardTitle>
            <CardDescription>
              See the DataTable in action in your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div>
                  <p className="font-medium">Example Component</p>
                  <p className="text-sm text-muted-foreground">Comprehensive examples with all features</p>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href="/dashboard" target="_blank">
                    View Demo
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div>
                  <p className="font-medium">Dashboard Implementation</p>
                  <p className="text-sm text-muted-foreground">Real-world usage in dashboard (alpha stage)</p>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href="/dashboard" target="_blank">
                    View Dashboard
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Tips for using DataTable effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Always provide a unique tableName</strong> for each table instance to prevent Zustand store conflicts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Use createSortableColumn</strong> for columns that need sorting functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Memoize column definitions</strong> to prevent unnecessary re-renders</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Use server-side pagination</strong> for datasets larger than 1000 rows</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Provide meaningful emptyMessage</strong> for better UX when no data is available</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>DataTable Component - Part of Next.JS Project Engine</p>
          <p className="mt-1">Status: Alpha Stage - Features may change as we refine the API</p>
        </div>
      </div>
    </div>
  );
}
