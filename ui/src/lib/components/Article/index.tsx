type ArticleProps = {
  children: React.ReactNode;
};

export default function Article({ children }: ArticleProps) {
  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
}
