import { useProperty } from "@modules/properties/hooks/useProperty";
import AddIcon from "@mui/icons-material/Add";
import { Grid, MenuItem, TextField } from "@mui/material";
import { Photo } from "@types";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { usePropertyPhotoRepository } from "src/repositories/PropertyPhoto";
import * as S from "./styles";
export const houseSections = [
  { value: "laundry_room", label: "Área de serviço" },
  { value: "bathroom", label: "Banheiro" },
  { value: "kitchen", label: "Cozinha" },
  { value: "garage", label: "Garagem" },
  { value: "room", label: "Quarto" },
  { value: "living_room", label: "Sala de estar" },
];

const PropertyImagesForm = () => {
  const [preview, setPreview] = useState("");
  const { property, photos, finishRegister } = useProperty();
  const [photoDelete, setPhotoDelete] = useState<Photo>();
  const router = useRouter();
  const [error, setError] = useState("");
  const { mutateAsync } = usePropertyPhotoRepository().createPropertyPhoto(
    property?.id
  );
  const [photosList, setPhotolist] = useState<Photo[]>([]);

  const usePropertyPhotoDelete =
    usePropertyPhotoRepository().deletePropertyPhoto(property?.id);

  const usePropertyPhotoRefresh =
    usePropertyPhotoRepository().refreshPropertyPhoto(property?.id);

  const { enqueueSnackbar } = useSnackbar();

  const onDrop = useCallback(
    (files: File[]) => {
      const objectUrl = URL.createObjectURL(files[0]);
      setPreview(objectUrl);
      mutateAsync(files[0])
        .then(() => {
          setPreview("");
          setError("");
        })
        .catch((error) => {
          setPreview("");
          enqueueSnackbar(error.message, {
            variant: "error",
          });
        });
    },
    [mutateAsync, enqueueSnackbar]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  function deletePhoto(photo: Photo) {
    setPhotoDelete(photo);
    usePropertyPhotoDelete
      .mutateAsync(photo?.id)
      .then(() => {
        setPhotoDelete(undefined);
      })
      .catch((error) => {
        setPhotoDelete(undefined);
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
  }
  function updatePhoto(value: string, photo: Photo) {
    photo.error = "";
    usePropertyPhotoRefresh
      .mutateAsync({ id: photo.id, houseSection: value })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
  }
  const { handleSubmit } = useForm();
  function onSubmit() {
    if (photosList.length == 0) {
      setError("Pelo menos uma foto é obrigatório.");
      return;
    } else {
      setError("");
    }
    let hasError = false;
    const photosNew: Photo[] = [];
    photosList.forEach((item) => {
      const itemNew = item;
      if (!item.houseSection) {
        item.error = "O campo é obrigatório.";
        hasError = true;
      } else {
        item.error = "";
      }
      photosNew.push(itemNew);
    });
    setPhotolist(photosNew);

    if (!hasError) {
      finishRegister();
      enqueueSnackbar("cadastro finalizado com sucesso!", {
        variant: "success",
      });
      router.push("/");
    }
  }

  useEffect(() => {
    setPhotolist(photos);
  }, [photosList, photos]);
  return (
    <S.Form id="step_form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        {preview && (
          <Grid item xs={6} md={3} sx={{ textAlign: "end" }}>
            <S.LoadingIcon />
            <S.ImageWrapperPreview>
              <S.Image src={preview} alt={""} fill />
            </S.ImageWrapperPreview>
            <TextField
              select
              sx={{ textAlign: "initial" }}
              name="houseSectionPreview"
              label="Lugar da casa"
              fullWidth
            >
              {houseSections.map((house) => (
                <MenuItem key={house.value} value={house.value}>
                  {house.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        )}
        {photosList?.map((photo) => (
          <Grid key={photo.id} item xs={6} md={3} sx={{ textAlign: "end" }}>
            {photo.id == photoDelete?.id && <S.LoadingIcon />}
            {photo.id != photoDelete?.id && (
              <div onClick={() => deletePhoto(photo)}>
                <S.DeleteIcon />
              </div>
            )}
            <S.ImageWrapper>
              <S.Image src={photo.url} alt={photo.key} fill />
            </S.ImageWrapper>
            <TextField
              sx={{ textAlign: "initial" }}
              select
              name="houseSection"
              defaultValue={photo.houseSection}
              label="Lugar da casa"
              fullWidth
              onChange={(e) => updatePhoto(e.target.value, photo)}
            >
              {houseSections.map((house) => (
                <MenuItem key={house.value} value={house.value}>
                  {house.label}
                </MenuItem>
              ))}
            </TextField>
            <S.Error>{photo.error}</S.Error>
          </Grid>
        ))}
        <Grid item xs={6} md={3}>
          <S.Upload {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <S.ImageWrapper>
              <AddIcon fontSize="small" />
              <div>Adicionar {photos.length > 0 ? "mais fotos" : "foto"}</div>
            </S.ImageWrapper>
          </S.Upload>
          <S.Error>{error}</S.Error>
        </Grid>
      </Grid>
    </S.Form>
  );
};

export default PropertyImagesForm;
