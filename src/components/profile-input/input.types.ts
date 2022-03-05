type InputProps = {
  events?: {
    click?: () => void,
    focusout?: (e: Event) => void
  };
  title?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: string;
  minlength?: string;
  maxlength?: string;
  pattern?: string;
  error_message?: string;
  error_pattern?: string;
  value?: string;
}

export {
    InputProps
};
