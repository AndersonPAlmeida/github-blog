import { ReactNode } from "react";
import { SummaryContainer } from "./style";

interface SummaryProps {
  children: ReactNode
}

export function Summary({ children } : SummaryProps){
  return (
    <SummaryContainer>
      {children}
    </SummaryContainer>
  )
}