import classNames from "classnames";
import { ComponentProps } from "react";

interface SectionTitleProps extends ComponentProps<"p"> {
  name: string;
}

function SectionTitle({ name, className = "", ...rest }: SectionTitleProps) {
  return (
    <p
      {...rest}
      className={classNames("text-lg sm:text-2xl font-bold capitalize font-cairo", {
        [className]: Boolean(classNames),
      })}
    >
      {name}
    </p>
  );
}

export default SectionTitle;
