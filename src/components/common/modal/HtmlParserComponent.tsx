// import React from 'react';
// import { parseDocument, Document } from 'htmlparser2';
// import { Element, DataNode } from 'domhandler';

// interface HtmlParserComponentProps {
//   htmlString: string;
// }

// const HtmlParserComponent: React.FC<HtmlParserComponentProps> = ({ htmlString }) => {
//   const document: Document = parseDocument(htmlString);

//   const renderNodes = (nodes: (Element | DataNode)[]): React.ReactNode => {
//     return nodes.map((node, index) => {
//       if (node.type === 'text') {
//         return <span key={index}>{(node as DataNode).data}</span>;
//       }
//       if (node.type === 'tag') {
//         const element = node as Element;
//         switch (element.name) {
//           case 'b':
//             return <strong key={index}>{renderNodes(element.children)}</strong>;
//           case 'i':
//             return <em key={index}>{renderNodes(element.children)}</em>;
//           default:
//             return <span key={index}>{renderNodes(element.children)}</span>;
//         }
//       }
//       return null;
//     });
//   };

//   return <div>{renderNodes(document.children as (Element | DataNode)[])}</div>;
// };

// export default HtmlParserComponent;