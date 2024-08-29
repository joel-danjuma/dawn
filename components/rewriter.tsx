import { ButtonGenerate } from "./buttonGenerate";
import { Textarea } from "@nextui-org/react";

interface TextRewriterProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  input: string;
}

const TextRewriter = ({
  handleSubmit,
  handleInputChange,
  input,
}: TextRewriterProps) => {
  return (
    <section className="w-full h-fit">
      <form onSubmit={handleSubmit} className="w-full h-fit">
        <Textarea
          id="text"
          value={input}
          minRows={5}
          onChange={handleInputChange}
          placeholder="Paste the text you want to rewrite here..."
          className="w-full resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <ButtonGenerate />
      </form>
    </section>
  );
};

export default TextRewriter;
