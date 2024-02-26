type ArticleProps = {
  children: React.ReactNode;
};

export default function Article({ children }: ArticleProps) {
  return (
    <div className="lg:w-1/2 md:w-full mx-auto">
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
}
