import { Input } from '../../../components/profile-input';
import { Button } from '../../../components/button';

type EditProps = {
  events?: {
    submit?: (e: Event) => void,
  };
  email?: Input;
  login?: Input;
  firstName?: Input;
  secondName?: Input;
  displayName?: Input;
  phone?: Input;
  button?: Button;
}

export {
    EditProps
};
