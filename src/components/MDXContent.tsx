import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';

// Custom MDX components to style rendered content
const components = {
  // Styled code blocks
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className="overflow-x-auto rounded-xl p-4 bg-slate-900 dark:bg-slate-950 text-slate-100 text-sm font-mono shadow-inner"
    >
      {children}
    </pre>
  ),
  // Inline code
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="px-1.5 py-0.5 rounded text-sm font-mono bg-slate-100 dark:bg-slate-800 text-primary-700 dark:text-primary-300">
      {children}
    </code>
  ),
  // Styled callout blockquote
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="border-l-4 border-primary-500 pl-4 italic text-slate-600 dark:text-slate-400 my-6"
    >
      {children}
    </blockquote>
  ),
};

interface MDXContentProps {
  source: string;
}

/**
 * Renders MDX content using next-mdx-remote's RSC variant.
 * This is a Server Component and cannot use hooks.
 */
export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose-custom">
      {/* @ts-expect-error - RSC async component */}
      <MDXRemote source={source} components={components} />
    </div>
  );
}
