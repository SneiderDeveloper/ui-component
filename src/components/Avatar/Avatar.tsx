import { Avatar as AvatarContainer, AvatarGroup } from "@nextui-org/avatar";
import { ReactElement } from "react";

interface AvatarProps {
  isAvatarGroup?: boolean;
  avatarGroup?: {};
  children?: ReactElement;
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
