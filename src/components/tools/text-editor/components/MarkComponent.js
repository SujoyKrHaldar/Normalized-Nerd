const MarkComponent = {
  link: ({ value, children }) => {
    const target = (value?.href || "").startsWith("http")
      ? "_blank"
      : undefined;
    return (
      <a
        className="border-b-[1px] border-transparent text-blue-700 hover:border-blue-700 font-bold pb-2"
        href={value?.href}
        target={target}
        rel={target === "_blank" && "noindex nofollow"}
      >
        {children}
      </a>
    );
  },

  code: ({ children }) => <code className="bg-[#f8f8f8] p-1">{children}</code>,
};
export default MarkComponent;
