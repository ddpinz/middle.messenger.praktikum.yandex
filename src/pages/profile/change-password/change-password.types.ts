import { Input } from '../../../components/profile-input';
import { Button } from '../../../components/button';
import { Link } from '../../../components/link';

type ChangePasswordProps = {
  events?: {
    submit?: (e: Event) => void,
  };
  oldPassword?: Input;
  newPassword?: Input;
  retypeNewPassword?: Input;
  button?: Button;
  backLink?: Link;
}

export {
    ChangePasswordProps
};
