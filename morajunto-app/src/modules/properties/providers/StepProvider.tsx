import { createContext, createElement, useEffect, useState } from "react";
import { Stepper } from "../components/Stepper";

export interface StepContextType {
  readonly step: number;
  nextStep: () => void;
  previousStep: () => void;
}

export interface Step {
  component: () => JSX.Element;
}

interface StepsProps {
  steps: Step[];
}

export const StepsContext = createContext({} as StepContextType);

export const StepsProvider = ({ steps }: StepsProps) => {
  const [step, setStep] = useState<number>(0);
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const previousStep = () => {
    if (step > 0) setStep(step - 1);
  };

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [step]);

  if (step === steps.length) {
    return <h1>Terminou os steps</h1>;
  }
  return (
    <StepsContext.Provider value={{ step, nextStep, previousStep }}>
      {createElement(steps[step].component)}
      <Stepper
        step={step + 1}
        steps={steps.length}
        previousStep={previousStep}
      />
    </StepsContext.Provider>
  );
};
