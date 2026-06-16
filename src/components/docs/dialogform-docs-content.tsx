"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Copy, Check, Book, Code, Zap, Shield } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function DialogFormDocsContent() {
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
            <a href="/docs/form" className="block px-3 py-2 rounded-lg text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
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
              <span className="font-medium">DialogForm</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Component</Badge>
            <Badge variant="outline">Alpha Stage</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">DialogForm Component</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Dynamic dialog form component built on top of TanStack Form and Zod validation. 
            Provides a flexible, reusable form-in-dialog solution with built-in validation and file upload support.
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
                <li>✅ Dynamic Fields - Config-based form</li>
                <li>✅ Validation - Zod schema validation</li>
                <li>✅ Field Types - text, email, tel, textarea, file</li>
                <li>✅ File Upload - Integrated drag-and-drop</li>
                <li>✅ Controlled/Uncontrolled - Both modes</li>
                <li>✅ Loading States - Built-in indicator</li>
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
                <li>✅ Error States - Visual feedback</li>
                <li>✅ Loading Indicator - Spinner during submit</li>
                <li>✅ Responsive Design - Mobile-friendly</li>
                <li>✅ Custom Styling - Full control</li>
                <li>✅ Dialog Integration - shadcn/ui dialog</li>
                <li>✅ Form Reset - Auto-reset on close</li>
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
                <li>✅ TanStack Form - Modern state management</li>
                <li>✅ Zod Validation - Type-safe validation</li>
                <li>✅ File Upload - Seamless handling</li>
                <li>✅ Accessibility - WCAG compliant</li>
                <li>✅ TypeScript - Full type safety</li>
                <li>✅ Real-time Validation - On-change errors</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get started with DialogForm in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">1. Import the component</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`import { DynamicDialogForm } from "@/components/organisms/dialog-form/dialog-form";
import { z } from "zod";`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("import", 'import { DynamicDialogForm } from "@/components/organisms/dialog-form/dialog-form";\nimport { z } from "zod";')}
                  >
                    {copiedCode === "import" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">2. Define validation schema and fields</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text" as const,
    placeholder: "Enter your name",
    validation: userSchema.shape.name,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email" as const,
    placeholder: "you@example.com",
    validation: userSchema.shape.email,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea" as const,
    placeholder: "Write your message...",
    validation: userSchema.shape.message,
  },
];`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("schema", `const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text" as const,
    placeholder: "Enter your name",
    validation: userSchema.shape.name,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email" as const,
    placeholder: "you@example.com",
    validation: userSchema.shape.email,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea" as const,
    placeholder: "Write your message...",
    validation: userSchema.shape.message,
  },
];`)}
                  >
                    {copiedCode === "schema" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">3. Use the component</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const handleSubmit = async (data: any) => {
  console.log("Form data:", data);
  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

<DynamicDialogForm
  title="Contact Form"
  description="Send us a message"
  fields={fields}
  schema={userSchema}
  onSubmit={handleSubmit}
  trigger={<Button>Contact Us</Button>}
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("usage", `const handleSubmit = async (data: any) => {
  console.log("Form data:", data);
  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

<DynamicDialogForm
  title="Contact Form"
  description="Send us a message"
  fields={fields}
  schema={userSchema}
  onSubmit={handleSubmit}
  trigger={<Button>Contact Us</Button>}
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
            <CardDescription>All available props for the DialogForm component</CardDescription>
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
                    <td className="p-2 font-mono text-xs">title</td>
                    <td className="p-2 text-xs">string</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Required. Dialog title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">fields</td>
                    <td className="p-2 text-xs">FieldConfig[]</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Required. Array of field configurations</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">schema</td>
                    <td className="p-2 text-xs">z.ZodObject</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Required. Zod validation schema</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">onSubmit</td>
                    <td className="p-2 text-xs">function</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Required. Form submission handler</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">description</td>
                    <td className="p-2 text-xs">string</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Dialog description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">trigger</td>
                    <td className="p-2 text-xs">ReactNode</td>
                    <td className="p-2 text-xs">-</td>
                    <td className="p-2 text-xs">Trigger element for dialog</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono text-xs">submitButtonText</td>
                    <td className="p-2 text-xs">string</td>
                    <td className="p-2 text-xs">"Submit"</td>
                    <td className="p-2 text-xs">Submit button text</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-xs">cancelButtonText</td>
                    <td className="p-2 text-xs">string</td>
                    <td className="p-2 text-xs">"Cancel"</td>
                    <td className="p-2 text-xs">Cancel button text</td>
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
                <TabsTrigger value="basic">Basic Form</TabsTrigger>
                <TabsTrigger value="file">File Upload</TabsTrigger>
                <TabsTrigger value="controlled">Controlled</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="mt-4">
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<DynamicDialogForm
  title="Contact Us"
  description="Send us a message"
  fields={contactFields}
  schema={contactSchema}
  onSubmit={handleSubmit}
  trigger={<Button>Contact Us</Button>}
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("basic", `<DynamicDialogForm
  title="Contact Us"
  description="Send us a message"
  fields={contactFields}
  schema={contactSchema}
  onSubmit={handleSubmit}
  trigger={<Button>Contact Us</Button>}
/>`)}
                  >
                    {copiedCode === "basic" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="file" className="mt-4">
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const uploadSchema = z.object({
  title: z.string().min(3, "Title too short"),
  file: z.instanceof(File).refine(
    (file) => file.size <= 5 * 1024 * 1024,
    "File must be under 5MB"
  ),
});

<DynamicDialogForm
  title="Upload Document"
  description="Upload a document (max 5MB)"
  fields={uploadFields}
  schema={uploadSchema}
  onSubmit={handleUpload}
  trigger={<Button>Upload</Button>}
/>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("file", `const uploadSchema = z.object({
  title: z.string().min(3, "Title too short"),
  file: z.instanceof(File).refine(
    (file) => file.size <= 5 * 1024 * 1024,
    "File must be under 5MB"
  ),
});

<DynamicDialogForm
  title="Upload Document"
  description="Upload a document (max 5MB)"
  fields={uploadFields}
  schema={uploadSchema}
  onSubmit={handleUpload}
  trigger={<Button>Upload</Button>}
/>`)}
                  >
                    {copiedCode === "file" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="controlled" className="mt-4">
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>
    Open Form
  </Button>
  
  <DynamicDialogForm
    title="Controlled Form"
    fields={fields}
    schema={schema}
    onSubmit={handleSubmit}
    open={isOpen}
    onOpenChange={setIsOpen}
  />
</>`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode("controlled", `const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>
    Open Form
  </Button>
  
  <DynamicDialogForm
    title="Controlled Form"
    fields={fields}
    schema={schema}
    onSubmit={handleSubmit}
    open={isOpen}
    onOpenChange={setIsOpen}
  />
</>`)}
                  >
                    {copiedCode === "controlled" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Tips for using DialogForm effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Always provide meaningful error messages</strong> in your Zod schemas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Use appropriate field types</strong> for better UX (email for emails, tel for phones)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Handle file uploads properly</strong> with size and type validation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Use controlled mode</strong> when you need external control over dialog state</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span><strong>Validate on the server</strong> even with client-side validation</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>DialogForm Component - Part of Next.JS Project Engine</p>
          <p className="mt-1">Status: Alpha Stage - Features may change as we refine the API</p>
        </div>
      </div>
      </main>
    </div>
  );
}
