import { SectionTitleProps } from "./types";

function SectionTitle({ name }: SectionTitleProps) {
  return <p className="text-lg font-semibold capitalize font-cairo">{name}</p>;
}

export default SectionTitle;
