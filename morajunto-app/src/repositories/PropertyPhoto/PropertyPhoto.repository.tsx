import { useProperty } from "@modules/properties/hooks/useProperty";
import { fetchService } from "@services";
import { Photo } from "@types";
import { useMutation } from "react-query";
import { UpdatePropertyPhotoDto } from "../Photo/Photo.types";

export const PROPERTY_BASE_URL = "/properties";
export const PHOTO_BASE_URL = "/photos";

const usePropertyPhotoRepository = () => {
  const { updatePhoto, deletePhoto, refreshPhotos } = useProperty();

  function createPropertyPhoto(propertyId?: number) {
    return useMutation({
      mutationFn: async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await fetchService.post<Photo>({
          url: `${PROPERTY_BASE_URL}/${propertyId}${PHOTO_BASE_URL}`,
          data: formData,
          config: {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        });

        return data;
      },
      onSuccess: (photo) => {
        updatePhoto(photo);
      },
    });
  }
  function deletePropertyPhoto(propertyId?: number) {
    return useMutation({
      mutationFn: async (photoId?: number) => {
        const { data } = await fetchService.delete<Photo>({
          url: `${PROPERTY_BASE_URL}/${propertyId}${PHOTO_BASE_URL}/${photoId}`,
        });

        return data;
      },
      onSuccess: (photo) => {
        deletePhoto(photo);
      },
    });
  }
  function refreshPropertyPhoto(propertyId?: number) {
    return useMutation({
      mutationFn: async (propertyPhoto: UpdatePropertyPhotoDto) => {
        const { houseSection } = propertyPhoto;
        const { data } = await fetchService.post<Photo>({
          url: `${PROPERTY_BASE_URL}/${propertyId}${PHOTO_BASE_URL}/${propertyPhoto.id}`,
          data: { houseSection: houseSection },
        });

        return data;
      },
      onSuccess: (photo) => {
        refreshPhotos(photo);
      },
    });
  }
  return { createPropertyPhoto, deletePropertyPhoto, refreshPropertyPhoto };
};

export default usePropertyPhotoRepository;
