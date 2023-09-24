export type FormProps = {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

export type AuthContents = {
  form: { name: string; type: string; placeholder: string }[];
  button: { text: string; onclick: () => void };
};

export type ErrorMessages = {
  body?: string[];
};

export interface ErrorProps {
  message: string[];
  errors: Record<string, string[]>;
}
