import { PortableTextReactComponents } from "@portabletext/react";


export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-blue-500">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-green-500">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed  text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
};
