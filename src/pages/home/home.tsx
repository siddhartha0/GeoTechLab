import { LandingPageLayout } from "../../components/common/landingpagelayout";
import { Banner } from "../../components/pages/home/banner";
import { Core } from "../../components/pages/home/core";

export const Home = () => {
  return (
    <LandingPageLayout>
      <div className="flex flex-col ">
        <Banner />
        <Core />
      </div>
    </LandingPageLayout>
  );
};
