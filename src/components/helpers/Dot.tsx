import classNames from "classnames";

interface DotProps {
  variant?:
    | "success"
    | "danger"
    | "primary"
    | "secondary"
    | "warning"
    | "default";
  size?: number;
  className?: string;
  color?: string;
}

function Dot({
  size = 12,
  variant = "primary",
  color,
  className = "",
}: DotProps) {
  return (
    <div
      className={classNames("rounded-full shrink-0", className, {
        shadow: !color,
        "bg-blue-500 shadow-primary": variant === "primary",
        "bg-green-500 shadow-success": variant === "success",
        "bg-red-500 shadow-danger": variant === "danger",
        "bg-yellow-500 shadow-warning": variant === "warning",
        "bg-gray-500 shadow-default": variant === "default",
        "bg-purple-500 shadow-secondary": variant === "secondary",
      })}
      style={{ width: size, height: size, backgroundColor: color }}
    />
  );
}

export default Dot;
