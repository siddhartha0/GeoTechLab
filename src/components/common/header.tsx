import { Link } from "react-router-dom";
import { Text } from "../units";
import logo from "../../assets/images/logo.png";
import { HeaderData } from "../../utils/constants/HeaderData";

export const Header = () => {
  return (
    <div className="flex place-items-center justify-between px-3 py-5">
      <section>
        <img src={logo} alt="" className="w-52 " />
      </section>
      <section className="flex place-items-center gap-7">
        {HeaderData.map((header) => (
          <Link to={header.path} key={header.id}>
            <Text
              size="body-sm-default"
              className="capitalize hover:text-fade-blue hover:border-b  p-1"
              usage="brand"
            >
              {header.title}
            </Text>
          </Link>
        ))}
      </section>
    </div>
  );
};
