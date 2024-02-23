type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <div className="flex flex-col h-screen">{children}</div>;
}
