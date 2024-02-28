import { Card, CardBody } from '@nextui-org/react';

type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  return (
    <Card shadow="none" radius="none" className="flex-grow py-4">
      <CardBody>{children}</CardBody>
    </Card>
  );
}
