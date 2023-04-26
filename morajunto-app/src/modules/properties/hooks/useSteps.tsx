import { useContext } from "react";
import { StepsContext } from "../providers/StepProvider";

export const useSteps = () => useContext(StepsContext);
