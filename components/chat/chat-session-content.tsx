import { ScrollArea } from "../ui/scroll-area";
import PromptInput from "./prompt-input";
import UserMessage from "./user-message";
import AIMessage from "./ai-message";

const ChatSessionContent = () => {
  return (
    <>
      <div className="flex-1 w-full h-full">
        <ScrollArea className="py-14 max-w-xs md:max-w-4xl h-[90%] mx-auto">
          <UserMessage content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi earum odio quo iste hic voluptas culpa animi fuga! Ab eaque tenetur beatae veli t, suscipit aut! Itaque nemo quod distinctio." />
          <AIMessage
            content={[
              "# Lorem\n",
              "- ipsum\n",
              "- dolor\n",
              "- sit\n\n",
              "amet\n",
              "consectetur\n",
              "```json\n",
              '{\n "name": "John",\n "age": 30,\n "city": "New York"\n}\n',
              "```\n",
            ]}
          />
          <UserMessage content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi earum odio quo iste hic voluptas culpa animi fuga! Ab eaque tenetur beatae veli t, suscipit aut! Itaque nemo quod distinctio." />
          <AIMessage
            content={[
              "# Lorem\n",
              "- ipsum\n",
              "- dolor\n",
              "- sit\n\n",
              "amet\n",
              "consectetur\n",
              "adipisicing\n",
              "elit. Iusto quasi earum odio quo iste hic voluptas culpa animi fuga! Ab eaque tenetur beatae veli t, suscipit aut! Itaque nemo quod distinctio.\n",
              "**Lorem**\n",
              "ipsum\n",
              "dolor\n",
              "sit\n",
              "amet\n",
              "consectetur\n",
              "adipisicing\n",
              "adipisicing\n",
              "elit. Iusto quasi earum odio quo iste hic voluptas culpa animi fuga! Ab eaque tenetur beatae veli t, suscipit aut! Itaque nemo quod distinctio\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "adipisicing\n",
              "```ts\n",
              "const a = 1\n",
              "const b = 2\n",
              "console.log(a + b)\n",
              "```\n",
            ]}
          />
        </ScrollArea>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <PromptInput className="absolute border border-teal-900" />
      </div>
    </>
  );
};

export default ChatSessionContent;
