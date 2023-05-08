import { useLink } from "@refinedev/core";
import { Logo } from "./styled";
import { BikeWhiteIcon, FineFoodsIcon } from "components";
import { theme } from "antd";

const { useToken } = theme;

type TitleProps = {
  collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { token } = useToken();
  const Link = useLink();

  return (
    <Logo>
      <Link to="/booking">
        <img src="https://htmldesigntemplates.com/html/travelin/images/logo.png"></img>
      </Link>
    </Logo>
  );
};
