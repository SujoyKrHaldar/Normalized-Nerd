const MarkComponent = {
  link: ({ value, children }) => {
    const target = (value?.href || "").startsWith("http")
      ? "_blank"
      : undefined;
    return (
      <a
        className="hover:underline border-transparent text-blue-700 hover:text-blue-900 font-bold"
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
