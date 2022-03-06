import { Input } from '../../../components/profile-input';
import { Button } from '../../../components/button';

type ChangePasswordProps = {
  events?: {
    submit?: (e: Event) => void,
  };
  oldPassword?: Input;
  newPassword?: Input;
  retypeNewPassword?: Input;
  button?: Button;
}

export {
    ChangePasswordProps
};
