import { useAuth } from "@hooks";
import { fetchService } from "@services";
import { Photo } from "@types";
import { useMutation } from "react-query";

export const PHOTO_BASE_URL = "/photos";

const usePhotoRepository = () => {
  const { updateUser } = useAuth();

  function updateUserPhoto() {
    return useMutation({
      mutationFn: async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await fetchService.post<Photo>({
          url: PHOTO_BASE_URL,
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
        updateUser({ photo });
      },
    });
  }

  return { updateUserPhoto };
};

export default usePhotoRepository;
