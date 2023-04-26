import bannerImg from "@assets/home/banner.jpg";
import { useRouter } from "next/router";
import SearchForm, { SearchFormValues } from "../SearchForm/SearchForm";
import * as S from "./styles";

const SearchRoom = () => {
  const router = useRouter();

  function onSubmit({ city, neighborhood }: SearchFormValues) {
    let searchURL = `/busca/imovel/${city.normalizedName}`;
    if (neighborhood) {
      searchURL = searchURL + `/${neighborhood.normalizedName}`;
    }
    router.push(searchURL);
  }

  return (
    <S.Wrapper>
      <S.ImageShadow />
      <S.Image
        src={bannerImg}
        alt="Sala de uma casa com um sofá e uma poltrona"
        priority
        fill
      />
      <S.SearchWrapper>
        <SearchForm onSubmit={onSubmit} />
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default SearchRoom;
