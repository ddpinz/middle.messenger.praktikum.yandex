import { Input } from '../../../components/profile-input';
import { Button } from '../../../components/button';

type EditProps = {
  events?: {
    submit?: (e: Event) => void,
  };
  email?: Input;
  login?: Input;
  first_name?: Input;
  second_name?: Input;
  display_name?: Input;
  phone?: Input;
  button?: Button;
}

export {
    EditProps
};
