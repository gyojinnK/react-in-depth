import { cm } from "../../util/cm";

type AvatarProps = {
  imagePath: string;
  className?: string;
};

const Avatar = ({ imagePath, className }: AvatarProps) => {
  return (
    <div
      className={cm(
        "rounded-full w-10 h-10 bg-[rgba(255,255,255,0.3)] overflow-hidden",
        className
      )}
    >
      <img src={imagePath} />
    </div>
  );
};

export default Avatar;
