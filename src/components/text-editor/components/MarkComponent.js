const MarkComponent = {
  link: ({ value, children }) => {
    const target = (value?.href || "").startsWith("http")
      ? "_blank"
      : undefined;
    return (
      <a
        className="border-b-[1px] border-transparent text-black hover:border-black font-bold pb-2"
        href={value?.href}
        target={target}
        rel={target === "_blank" && "noindex nofollow"}
      >
        {children}
      </a>
    );
  },
};
export default MarkComponent;