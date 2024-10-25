import { Text } from "../../units";
import { Button } from "../../units/Button";
import slider from "../../../assets/images/bg.jpg";

export const Banner = () => {
  return (
    <div
      className="flex bg-cover bg-center "
      style={{ backgroundImage: `url(${slider})` }}
    >
      <section className="flex flex-col gap-20 w-[675px] px-8 py-28">
        <Text size="heading-lg-default">
          Industry leaders in compaction control and material compliance testing
        </Text>
        <div className="flex flex-col gap-6">
          <Text usage="info" size="body-base-mid">
            Delivering an unparalleled level of customer service and technical
            integrity.
          </Text>
          <section className="flex gap-3">
            <Button>Request Testing</Button>
            <Button>Contact us</Button>
          </section>
        </div>
      </section>
    </div>
  );
};
