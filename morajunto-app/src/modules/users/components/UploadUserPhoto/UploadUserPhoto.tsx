import { useAuth } from "@hooks";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Button } from "@mui/material";
import { usePhotoRepository } from "@repositories";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as S from "./styles";

const UploadUserPhoto = () => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync, isLoading } = usePhotoRepository().updateUserPhoto();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      return mutateAsync(acceptedFiles[0])
        .then(() =>
          enqueueSnackbar("Foto de perfil atualizada com sucesso", {
            variant: "success",
          })
        )
        .catch((error) =>
          enqueueSnackbar(error.message, {
            variant: "error",
          })
        );
    },
    [enqueueSnackbar, mutateAsync]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    maxFiles: 1,
    onDrop,
    disabled: isLoading,
  });

  return (
    <S.Wrapper {...getRootProps()}>
      <S.AvatarWrapper>
        <S.UserAvatar src={user?.photo?.url} alt={user?.name} />
        {isLoading && <S.Progress size={140} />}
      </S.AvatarWrapper>
      <Button
        variant="contained"
        startIcon={<CloudUploadOutlinedIcon />}
        disabled={isLoading}
      >
        Enviar Foto
        <input hidden {...getInputProps()} />
      </Button>
    </S.Wrapper>
  );
};

export default UploadUserPhoto;
