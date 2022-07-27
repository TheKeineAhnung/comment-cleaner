import { defekt } from 'defekt';

class LanguageNotSupported extends defekt({
  code: 'LanguageNotSupported',
  defaultMessage: 'The language you entered isn`t supported.'
}) {}

export { LanguageNotSupported };
