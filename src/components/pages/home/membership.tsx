import { Icon } from "@iconify/react/dist/iconify.js";
import bg from "../../../assets/images/aim.jpg";
import { Text } from "../../units";
import { Button } from "../../units/Button";

export const Membership = () => {
  return (
    <div className="flex flex-col ">
      <section
        className="relative flex  bg-cover bg-center px-36 py-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute  inset-0 bg-fadish-blue opacity-60 " />
        <div className="flex flex-col z-10 gap-8 w-[495px]">
          <Text usage="click" size="heading-lg-default">
            Primary Aim
          </Text>
          <Text usage="click" size="body-base-default">
            Geotechnical Laboratories primary aim when testing for its clients
            is to issue compaction results quickly to enable continuous site
            production. As a result Geolab strives to give verbal results
            on-site and NATA endorsed reports within 24 hours of testing. Geolab
            also works closely with the Quality Assurance Officers of its
            clients to ensure appropriate procedures are in place for
            co-ordination of testing and traceability of lots/samples.
          </Text>
          <Button usage="click" className="w-[20%]">
            <Text usage="info" size="body-base-default">
              Projects
            </Text>
            <Icon
              icon="iconamoon:arrow-right-2-duotone"
              fontSize={20}
              className="text-fade-blue"
            />
          </Button>
        </div>
        <div></div>
      </section>
    </div>
  );
};
