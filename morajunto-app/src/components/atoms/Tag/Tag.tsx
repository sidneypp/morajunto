import {
  HotelOutlined,
  Man2Outlined,
  WcOutlined,
  WomanOutlined,
} from "@mui/icons-material";
import { Tag as TagProps } from "@types";
import * as S from "./Tag.styles";

const typesModifier = {
  woman: WomanOutlined,
  man: Man2Outlined,
  manOrWoman: WcOutlined,
  bedroom: HotelOutlined,
};

const Tag = ({ label, type }: TagProps) => {
  const IconComponent = typesModifier[type];

  return (
    <S.Tag variant="caption">
      <IconComponent fontSize="small" />
      {label}
    </S.Tag>
  );
};

export default Tag;
