import { useRef } from "react";

function App() {
  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex flex-col justify-center mx-[20%]  gap-4">
      <div className="flex justify-center gap-4 bg-white p-2">
        <button className="border border-gray-600 p-1 w-8 cursor-pointer font-bold">
          B
        </button>
        <button className="border border-gray-600 p-1 w-8 cursor-pointer italic">
          I
        </button>
        <button className="border border-gray-600 p-1 w-8 cursor-pointer line-through">
          S
        </button>
      </div>
      <div
        ref={editorRef}
        suppressContentEditableWarning
        contentEditable
        className="h-[80%] bg-white outline-none p-2"
      ></div>
    </main>
  );
}

export default App;
