import classname from "classnames";
import React from "react";

type HTMLTags =
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "aside";

interface propTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  as?: HTMLTags;
  children: React.ReactNode;
  size?:
    | "heading-lg-default"
    | "heading-lg-mid"
    | "heading-lg-rare"
    | "heading-base-default"
    | "heading-base-mid"
    | "heading-base-rare"
    | "body-lg-default"
    | "body-lg-mid"
    | "body-lg-rare"
    | "body-md-default"
    | "body-md-mid"
    | "body-md-rare"
    | "body-sm-default"
    | "body-sm-mid"
    | "body-sm-rare"
    | "body-base-default"
    | "body-base-mid"
    | "body-base-rare";

  usage?: "brand" | "default" | "primary" | "click" | "info";
  text?: string;
  className?: string;
}

export const Text = React.memo(
  ({
    as: Component = "p",
    size = "body-lg-default",
    children,
    usage = "default",
    className,
    text,
    ...other
  }: propTypes) => {
    return (
      <Component
        className={classname(`${className}`, {
          //----------Size & FONT WEIGHT------------//
          //------------- Default or 500px  font with different sizes-----------------//
          "text-[40px] font-medium": size == "heading-lg-default",
          "text-[26px] font-medium": size === "heading-base-default",
          "text-[22px] font-medium": size === "body-lg-default",
          "text-[20px] font-medium": size === "body-md-default",
          "text-[17px] font-medium": size === "body-sm-default",
          "text-[15px] font-medium": size === "body-base-default",

          //-------------End of Default or 500px  font-----------------//

          //------------- Mid or 600px  & font with different sizes-----------------//
          "text-[40px] font-semibold": size == "heading-lg-mid",
          "text-[26px] font-semibold": size === "heading-base-mid",
          "text-[22px] font-semibold": size === "body-lg-mid",
          "text-[20px] font-semibold": size === "body-md-mid",
          "text-[17px] font-semibold": size === "body-sm-mid",
          "text-[15px] font-semibold": size === "body-base-mid",
          //-------------End of Mid or 600px  font-----------------//

          //------------- Rare or 700px  & font with different sizes-----------------//
          "text-[40px] font-bold": size == "heading-lg-rare",
          "text-[26px] font-bold": size === "heading-base-rare",
          "text-[22px] font-bold": size === "body-lg-rare",
          "text-[20px] font-bold": size === "body-md-rare",
          "text-[17px] font-bold": size === "body-sm-rare",
          "text-[15px] font-bold": size === "body-base-rare",
          //-------------End of Rare or 700px  font-----------------//
          //--------------------END of Size & FONT WEIGHT-------------------------//

          //----------color------------//
          "text-black-900": usage == "brand",
          "text-black-1000": usage == "default",
          "text-black-700": usage == "primary",
          "text-white": usage == "click",
          "text-fadish-blue": usage == "info",
          //----------End of color------------//
        })}
        {...other}
      >
        {text || children}
      </Component>
    );
  }
);
