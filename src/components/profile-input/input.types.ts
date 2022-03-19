type InputProps = {
  events?: {
    click?: () => void,
    focusout?: (e: Event) => void
    change?: (e: Event) => void
  };
  title?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: string;
  minlength?: string;
  maxlength?: string;
  pattern?: string;
  errorMessage?: string;
  errorPattern?: string;
  value?: string;
  inputValue?: string;
}

export {
    InputProps
};
