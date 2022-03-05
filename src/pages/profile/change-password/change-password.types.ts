import { Input } from '../../../components/profile-input';
import { Button } from '../../../components/button';

type ChangePasswordProps = {
  events?: {
    submit?: (e: Event) => void,
  };
  oldPassword?: Input;
  newPassword?: Input;
  retype_newPassword?: Input;
  button?: Button;
}

export {
    ChangePasswordProps
};
