import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';

const SidebarLogo = () => {
  return (
    <Link to='/dashboard'>
      <img src={Logo} alt='Zamin' />
    </Link>
  );
};

export default SidebarLogo;
