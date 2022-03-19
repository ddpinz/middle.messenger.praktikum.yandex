import { ProfileLine } from '../components/profile-line/index';
import { ProfileLink } from '../components/profile-link/index';
import { Link } from '../../../components/link';

type ProfileProps = {
  email?: ProfileLine;
  login?: ProfileLine;
  firstName?: ProfileLine;
  secondName?: ProfileLine;
  displayName?: ProfileLine;
  phone?: ProfileLine;
  edit?: ProfileLink;
  changePassword?: ProfileLink;
  logout?: ProfileLink;
  go2Chat?: Link
}

export {
    ProfileProps
};
