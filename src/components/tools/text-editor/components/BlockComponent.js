const BlockComponent = {
  h1: ({ children }) => (
    <>{children == "" ? <br /> : <h1 className="text-2xl">{children}</h1>}</>
  ),

  h2: ({ children }) => (
    <>{children == "" ? <br /> : <h2 className="font-medium">{children}</h2>}</>
  ),

  normal: ({ children }) => (
    <>
      {children == "" ? (
        <br />
      ) : (
        <p className="leading-8 text-[#4b4b4b]">{children}</p>
      )}
    </>
  ),

  blockquote: ({ children }) => (
    <blockquote className="text-lg bg-[#faebd7]  border-l-black border-l-4 py-4 px-6">
      {children}
    </blockquote>
  ),
};
export default BlockComponent;
