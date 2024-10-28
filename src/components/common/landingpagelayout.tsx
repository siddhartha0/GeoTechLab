import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface layoutPropTypes {
  children: React.ReactNode;
}

export const LandingPageLayout = ({ children }: layoutPropTypes) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
