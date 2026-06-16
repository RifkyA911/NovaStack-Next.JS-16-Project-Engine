import React from 'react'

const config = {
  logo: <span>Next.JS Project Engine - Components</span>,
  project: {
    link: 'https://github.com/yourusername/nextjs-project-engine',
  },
  docsRepositoryBase: 'https://github.com/yourusername/nextjs-project-engine/blob/main',
  footer: {
    text: 'Next.JS Project Engine Documentation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  toc: {
    backToTop: true,
    extraContent: [
      <div key="theme-toggle" className="mt-4 pt-4 border-t">
        <p className="text-sm text-muted-foreground mb-2">Theme</p>
      </div>
    ],
  },
  useNextSeoProps: () => ({
    titleTemplate: '%s – Next.JS Project Engine',
  }),
  search: {
    placeholder: 'Search documentation...',
  },
}

export default config
