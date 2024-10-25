import { Footer } from "./footer";
import { Header } from "./header";

interface layoutPropTypes {
  children: React.ReactNode;
}

export const LandingPageLayout = ({ children }: layoutPropTypes) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
