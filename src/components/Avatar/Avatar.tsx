import { Avatar as AvatarContainer, AvatarGroup } from "@nextui-org/avatar";
import { ReactElement } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: number;
  className?: string;
  isDisabled?: boolean;
  isBordered?: boolean;
  showFallback?: boolean;
  fallback?: {};
  radius?: string;
  color?: string;
  isAvatarGroup?: boolean;
  avatarGroup?: {};
children?: ReactElement;
  max?: number;
  total?: number;
  isGrid?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  isAvatarGroup,
  avatarGroup,
  children,
  ...attributes
}) => {

  return (
    <>
      {
        isAvatarGroup ? (
          <AvatarGroup {...attributes} >
            <>
              {
                avatarGroup.map((atr) => (
                  <AvatarContainer {...atr} />
                ))
              }
            </>
          </AvatarGroup>
        ) : (
          <AvatarContainer {...attributes} />
        )
      }
    </>
  )

};

export default Avatar;
