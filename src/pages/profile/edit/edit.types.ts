import { Input } from '../../../components/profile-input';
import { Button } from '../../../components/button';
import { Avatar } from '../components/avatar';
import { Link } from '../../../components/link';

type EditProps = {
  events?: {
    submit?: (e: Event) => void,
  };
  avatar?: Avatar;
  email?: Input;
  login?: Input;
  firstName?: Input;
  secondName?: Input;
  displayName?: Input;
  phone?: Input;
  button?: Button;
  go2Settings?: Link
}

export {
    EditProps
};
