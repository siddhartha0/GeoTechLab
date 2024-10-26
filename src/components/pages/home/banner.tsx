import { Text } from "../../units";
import { Button } from "../../units/Button";
import slider from "../../../assets/images/bg.jpg";

export const Banner = () => {
  return (
    <div
      className="flex bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${slider})` }}
    >
      <section className="flex flex-col gap-20 w-[675px] px-8 py-28 font-sans">
        <Text size="heading-lg-default" secondaryFont>
          Industry leaders in compaction control and material compliance testing
        </Text>
        <div className="flex flex-col gap-6 w-[65%]">
          <Text usage="info" size="body-base-rare" secondaryFont>
            Delivering an unparalleled level of customer service and technical
            integrity.
          </Text>
          <section className="flex gap-3">
            <Button size="small" secondaryFont>
              Request Testing
            </Button>
            <Button size="small" usage="primary" secondaryFont>
              Contact us
            </Button>
          </section>
        </div>
      </section>
    </div>
  );
};
