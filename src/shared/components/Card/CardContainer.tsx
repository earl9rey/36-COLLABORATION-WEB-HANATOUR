import type { ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  return <div className="flex w-full items-center justify-between pt-[3rem] pb-[3rem]">{children}</div>;
};

export default CardContainer;
