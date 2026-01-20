
export type Operator = '+' | '-' | '×' | '÷' | null;

export interface CalculatorState {
  displayValue: string;
  operator: Operator;
  previousValue: string | null;
  waitingForOperand: boolean;
}
