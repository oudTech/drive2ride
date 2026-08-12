export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="flex flex-col gap-4 leading-relaxed text-neutral-600">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="mt-4 text-xl font-bold text-neutral-900 first:mt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="mt-2 text-lg font-semibold text-neutral-900">
              {block.text}
            </h3>
          );
        }
        if (block.type === "list") {
          return (
            <ol
              key={index}
              className="flex list-[lower-alpha] flex-col gap-1 pl-5"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ol>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
