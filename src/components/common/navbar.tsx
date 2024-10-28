import { Link } from "react-router-dom";
import { Text } from "../units";
import logo from "../../assets/images/logo.png";
import { HeaderData } from "../../utils/constants/HeaderData";
import { memo, useEffect, useState } from "react";

export const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 0;
      setIsScrolled(shouldBeScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex px-5 py-5 justify-between place-items-center sticky top-0 z-20 ${
        isScrolled ? "bg-fadding-blue" : ""
      }`}
    >
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
});
