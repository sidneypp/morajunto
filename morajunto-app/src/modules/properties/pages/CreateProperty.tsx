import { PropertyProvider } from "../providers/PropertyProvider";
import { Step, StepsProvider } from "../providers/StepProvider";
import { HostStep } from "../steps/HostStep";
import { PropertyAddressStep } from "../steps/PropertyAddressStep";
import { PropertyDetailsStep } from "../steps/PropertyDetailsStep";
import { PropertyImagesStep } from "../steps/PropertyImagesStep";
import { PropertyValuesStep } from "../steps/PropertyValuesStep";

const steps: Step[] = [
  {
    component: PropertyAddressStep,
  },
  {
    component: PropertyDetailsStep,
  },
  {
    component: PropertyValuesStep,
  },
  {
    component: HostStep,
  },
  {
    component: PropertyImagesStep,
  },
];

export function CreateProperty() {
  return (
    <PropertyProvider>
      <StepsProvider steps={steps} />
    </PropertyProvider>
  );
}
