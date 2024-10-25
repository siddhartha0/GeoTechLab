import { LandingPageLayout } from "../../components/common/landingpagelayout";
import { Banner } from "../../components/pages/home/banner";

export const Home = () => {
  return (
    <LandingPageLayout>
      <div className="flex flex-col p-5">
        <Banner />
      </div>
    </LandingPageLayout>
  );
};
