import Input from '../../components/input/input';
import Button from '../../components/button/button';

type RegistrationProps = {
  link_text?: string;
  link?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  email?: Input;
  login?: Input;
  name?: Input;
  last_name?: Input;
  phone?: Input;
  password?: Input;
  retype_password?: Input;
  button?: Button;
}

export {
  RegistrationProps
};
