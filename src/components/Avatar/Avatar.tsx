import { Avatar } from '@nextui-org/react';

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
  size: string;
  className: string;

}

const AvatarUser: React.FC<AvatarProps> = ({...atributes}) => {
    return <Avatar {...atributes}/>
}
export default AvatarUser;