import Input from '../../components/input/input';
import Button from '../../components/button/button';

type RegistrationProps = {
  linkText?: string;
  link?: string;
  events?: {
    submit?: (e: Event) => void,
  },
  email?: Input;
  login?: Input;
  name?: Input;
  lastName?: Input;
  phone?: Input;
  password?: Input;
  retypePassword?: Input;
  button?: Button;
}

export {
    RegistrationProps
};
