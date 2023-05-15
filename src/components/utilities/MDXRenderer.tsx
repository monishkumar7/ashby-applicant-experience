import React from 'react';
import { evaluate } from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/react';
import { components } from './components';

type MdxRendererProps = {
  mdxSource: string;
};

export const MdxRenderer: React.FC<MdxRendererProps> = ({ mdxSource }) => {
  const Content = React.useMemo(() => {
    const jsx = evaluate(mdxSource, { components });
    return jsx;
  }, [mdxSource]);

  return (
    <div className="prose prose-lg">
      <MDXProvider components={MDXComponents}>{Content}</MDXProvider>
    </div>
  );
};
