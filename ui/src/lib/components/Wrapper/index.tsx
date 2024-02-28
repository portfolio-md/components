type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
