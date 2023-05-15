export const components = {
  h1: (props: any) => <h1 className="text-2xl font-bold my-4" {...props} />,
  p: (props: any) => <p className="my-4" {...props} />,
  MyComponent: () => (
    <div className="bg-gray-200 p-4">This is my custom component.</div>
  )
};
