import { Link } from "react-router-dom";
import { Text } from "../units";
import logo from "../../assets/images/logo.png";
const HeaderData = [
  { id: 1, title: "home", path: "" },
  { id: 2, title: "our team", path: "" },
  { id: 3, title: "capabilities", path: "" },
  { id: 4, title: "Projects", path: "" },
  { id: 5, title: "Affiliation & Membership", path: "" },
  { id: 6, title: "Request Testing", path: "" },
  { id: 7, title: "Contact Us", path: "" },
];

export const Header = () => {
  return (
    <div className="flex place-items-center justify-between px-3 py-5">
      <section>
        <img src={logo} alt="" className="w-52 " />
      </section>
      <section className="flex place-items-center gap-10">
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
