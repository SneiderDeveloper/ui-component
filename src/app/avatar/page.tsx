import Avatar from '@/components/Avatar/Avatar';
import { CameraIcon } from '@/components/Avatar/CameraIcon';
import { BgAmber, BgGradient, BgPrimary, BgWarning } from '@/components/Avatar/CustomAvatar';
import { group } from 'console';
function Users() {
  const userOne = {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    attributes: {
      description: 'user one',
    }
  };

  const userTwo = {
    name: 'Junior',
    attributes: {
      description: 'userTwo'
    }
  };

  const userThree = {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    attributes: {
      description: 'userThree',
    }
  };

  const userFour = {
    name: 'Jane',
    attributes: {
      description: 'userFour',
    }
  };

  const userFive = {
    src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    attributes: {
      description: 'userFive'
    }
  };

  const userStiles1 = {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    attributes: {
      className: 'w-6 h-6 text-tiny',
      description: 'user one',
    }
  };

  const userStiles2 = {
    name: 'Junior',
    attributes: {
      size: 'sm',
      description: 'userTwo'
    }
  };

  const userStiles3 = {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    attributes: {
      size: 'md',
      description: 'userThree',
    }
  };

  const userStiles4 = {
    name: 'Jane',
    attributes: {
      description: 'userFour',
      size: 'lg'
    }
  };

  const userStiles5 = {
    src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    attributes: {
      className: 'w-20 h-20 text-large',
      description: 'userFive'
    }
  };

  const Group = {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  }

  const Group1 = {
    src: 'https://i.pravatar.cc/150?u=a0425816024d'
  }

  const Group2 = {
    src: 'https://i.pravatar.cc/150?u=a0425819026024d'
  }

  const Group3 = {
    src: 'https://i.pravatar.cc/150?u=a04258129026024d'
  }

  const Group4 = {
    src: 'https://i.pravatar.cc/150?u=a0425f4e290260245d'
  }

  const Group5 = {
    src: 'https://i.pravatar.cc/150?u=a0425290260254d'
  }

  const Groups = [
    {
      src: 'https://i.pravatar.cc/150?u=a04251602d'

    },
    {
      src: 'https://i.pravatar.cc/150?u=a042581444t26024d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a042581226024d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a0425f4e2260245d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a04252906024d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a042529260254d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a04251602d'

    },
    {
      src: 'https://i.pravatar.cc/150?u=a042581426024d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a042526024d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a0425f4e20245d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a04252924d'
    },
    {
      src: 'https://i.pravatar.cc/150?u=a04252954'
    },

  ]

  return (
    <>
      <div className='grid grid-cols-1 gap-10' >
        <div className='avatar grid grid-cols-3 items-center gap-7'>
          {/* Avatar ////////////////////////////////////////////////////////////////// */}
          <div className='flex gap-3'>
            <Avatar
              src={userOne.src}
            />
            <Avatar
              name={userTwo.name}
            />
            <Avatar
              src={userThree.src}
            />
            <Avatar
              name={userFour.name}
            />
            <Avatar
              src={userFive.src}
            />
          </div>
          {/* is dibaled ////////////////////////////////////////////////////////// */}
          <div className='flex gap-4'>
            <Avatar isDisabled
              src={userStiles1.src}
              {...userOne.attributes}
            />
            <Avatar isDisabled
              name={userStiles2.name}
              {...userTwo.attributes}
            />
            <Avatar isDisabled
              src={userStiles3.src}
              {...userThree.attributes}
            />
            <Avatar isDisabled
              name={userStiles4.name}
              {...userFour.attributes}
            />
            <Avatar isDisabled
              src={userStiles5.src}
              {...userFive.attributes}
            />
          </div>
          {/* is bordered /////////////////////////////////////////////////////////////////////////////////////// */}
          <div className='flex gap-4'>
            <Avatar isBordered
              src={userStiles1.src}
              {...userStiles1.attributes}
            />
            <Avatar isBordered
              name={userStiles2.name}
              {...userTwo.attributes}
            />
            <Avatar isBordered
              src={userStiles3.src}
              {...userThree.attributes}
            />
            <Avatar isBordered
              name={userStiles4.name}
              {...userFour.attributes}
            />
            <Avatar isBordered
              src={userStiles5.src}
              {...userStiles5.attributes}
            />
          </div>
          {/* se pueden  pasar los atributos directamente///////////////////////////// 
      BORDERED Radius//////////////////////////////////////////////*/}
          <div className='flex gap-3'>
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a042544f44v5526rrr'
              radius='full'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a04254444vv5526rrr'
              radius='lg'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a042544f4vv5526rrr'
              radius='md'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a044544f4vv5526rrr'
              radius='sm'
            />
          </div>
          {/* bordered color ///////////////////////////////////////////////// */}
          <div className='flex gap-3'>
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a042581f4e6024d'
              color='default'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a042581f4e224d'
              color='primary'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a042581f4026024d'
              color='seconday'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a042581f4e290024d'
              color='success'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u=a0425829026024d'
              color='warning'
            />
            <Avatar isBordered
              src='https://i.pravatar.cc/150?u29026024d'
              color='danger'
            />
          </div>
          {/* default avatars en caso de que no cargue una imagen */}
          <div className="flex gap-4">
            <Avatar showFallback
              src='https://images.unsplash.com/broken'
              fallback={
                <CameraIcon className='animate-pulse w-6 h-6 text-default-500' />
              } />
            <Avatar showFallback
              src='https://images.unsplash.com/broken'
            />
            <Avatar showFallback
              name='Jane'
              src='https://images.unsplash.com/broken'
            />
            <Avatar
              name='Joe'
              src='https://images.unsplash.com/broken'
            />
          </div>


        </div >
        <hr />
        <div className='grid grid-cols-3 gap-8'>
          {/* Avatar group /////////////////////////////////////////////////////////////////*/}
          <Avatar
            isBordered
            isAvatarGroup={true}
            avatarGroup={Groups}
          />
          {/* Avatar group Disabled /////////////////////////////////////////////////////////////////*/}
          <Avatar
            isDisabled
            isBordered
            isAvatarGroup={true}
            avatarGroup={Groups}
          />
          {/* Avatar group maximum elements /////////////////////////////////////////////////////////////////*/}
          <Avatar
            isBordered
            max={3}
            isAvatarGroup={true}
            avatarGroup={Groups}
          />
          {/* Avatar group maximum elements  and minimum /////////////////////////////////////////////////////////////////*/}
          <Avatar
            max={6}
            total={10}
            isBordered
            isAvatarGroup={true}
            avatarGroup={Groups}
          />
          <Avatar
            isGrid={true}
            max={12}
            isBordered
            isAvatarGroup={true}
            avatarGroup={Groups}
          />
          {/* Avatar group show additional with text
            NOTE:This is used when the server is running the client  =>>  'use client'
            <Avatar
            max={3}
            isBordered
            total={13}
            renderCount={(total) => (
              <p className="text-small font-medium ms-2 shadow-md">+{total} others</p>
            )}
            isAvatarGroup={true}
            avatarGroup={Groups}
          /> */}
          <div className='flex gap-3 '>
            <BgGradient />
            <BgPrimary />
            <BgWarning />
            <BgAmber />
          </div>

        </div>
      </div>
    </>
  );
}
export default Users;