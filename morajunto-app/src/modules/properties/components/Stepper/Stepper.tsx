import { LoadingButton } from "@mui/lab";
import { Button, LinearProgress, Typography } from "@mui/material";
import * as S from "./styles";

interface Stepper {
  step: number;
  steps: number;
  previousStep: () => void;
}

const Stepper = ({ step, steps, previousStep }: Stepper) => {
  const visibility = step > 1 ? "visible" : "hidden";
  const progressValue = (step / steps) * 100;

  return (
    <S.Footer>
      <S.Wrapper>
        <LinearProgress variant="determinate" value={progressValue} />
        <S.ActionsWrapper>
          <Button onClick={previousStep} variant="outlined" sx={{ visibility }}>
            Voltar
          </Button>
          <Typography>
            Etapa {step} de {steps}
          </Typography>
          <LoadingButton form="step_form" variant="contained" type="submit">
            {step === steps ? "Concluir" : "Próximo"}
          </LoadingButton>
        </S.ActionsWrapper>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Stepper;
