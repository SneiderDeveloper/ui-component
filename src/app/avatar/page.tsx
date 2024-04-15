import AvatarUser from '@/components/Avatar/Avatar';


function Users() {
  const userOne = {
   src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
   attributes:{
      size: 'lg',
      description: 'user one',
      }
  }

  const userTwo = { 
    name: 'Junior',
    attributes:{
      size: 'lg',
    description: 'userTwo'
  }
  }

  const userThree = {
    children: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    description: 'userThree'
  }

  const userFour = {
    attributes:{
      name: 'Jane',
    description: 'userFour',
    size:'lg'
  }
  }

  const userFive = {
    children:'https://i.pravatar.cc/150?u=a04258114e29026702d',
    description: 'userFive',
    
  }

  const userSix = {
    children: 'Joe',
    attributes:{
    description: 'userSix',
    className:'w-20 h-20 text-large'
  }
  }

  return (
    <div className='flex gap-3 items-center'>
      <AvatarUser src={userOne.src} 
      {...userOne.attributes} />
      <AvatarUser name={userTwo.name}
       {...userTwo.attributes} />
      <AvatarUser children={userThree.children}  />
      <AvatarUser  {...userFour.attributes} />
      <AvatarUser children={userFive.children} /> 
      <AvatarUser {...userSix.attributes} />
    </div>
  );
};

export default Users;