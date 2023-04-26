import { ProfileForm } from "../ProfileForm";
import { UploadUserPhoto } from "../UploadUserPhoto";
import * as S from "./styles";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.ProfileCard>
        <UploadUserPhoto />
      </S.ProfileCard>
      <S.ProfileWrapper>
        <ProfileForm />
      </S.ProfileWrapper>
    </S.Wrapper>
  );
};

export default Profile;
