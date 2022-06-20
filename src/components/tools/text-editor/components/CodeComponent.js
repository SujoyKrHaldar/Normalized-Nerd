import highlight from "highlight.js";
import "highlight.js/styles/nnfx-light.css";

import { findDOMNode } from "react-dom";
import { createRef, useEffect } from "react";

function CodeComponent({ value }) {
  const code = createRef();

  useEffect(() => {
    highlight.highlightElement(findDOMNode(code.current));
  }, []);

  return (
    <div className="my-8">
      <pre
        allowunsafehtml="true"
        className="p-6 overflow-x-auto border-l-4 border-black border-[1px]"
        data-language={value.language}
        ref={code}
      >
        <code>{value.code}</code>
      </pre>
      <p className="text-base mt-3 bg-[#faebd7] px-4 py-1.5 border-l-4 border-black inline-block">
        {value.filename}
      </p>
    </div>
  );
}

export default CodeComponent;
