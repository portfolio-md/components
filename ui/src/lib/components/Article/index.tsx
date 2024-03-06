type ArticleProps = {
  children: React.ReactNode;
};

export default function Article({ children }: ArticleProps) {
  return (
    <div className="mx-auto flex justify-center">
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
}
