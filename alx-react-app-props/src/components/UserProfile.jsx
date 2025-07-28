import { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext); // ✔️ Use context here

  return <UserInfo userData={userData} />;
}

export default UserProfile;
