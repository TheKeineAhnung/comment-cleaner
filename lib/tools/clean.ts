import { clearGroupFour } from './clearGroupFour';
import { clearGroupOne } from './clearGroupOne';
import { clearGroupThree } from './clearGroupThree';
import { clearGroupTwo } from './clearGroupTwo';
import { languageCommentGroupAssignment } from '../langs/languageCommentGroupAssignment';
import { SupportedLanguages } from '../langs/SupportedLanguages';
import * as errors from '../errors';

const clean = function (lang: SupportedLanguages, content: string): string {
  let clearedString = '';
  const group: number = languageCommentGroupAssignment[lang];

  switch (group) {
    case 1:
      clearedString = clearGroupOne(content);
      break;
    case 2:
      clearedString = clearGroupTwo(content);
      break;
    case 3:
      clearedString = clearGroupThree(content);
      break;
    case 4:
      clearedString = clearGroupFour(content);
      break;
    default: {
      throw new errors.LanguageNotSupported({
        data: { enteredLanguage: lang }
      });
    }
  }

  return clearedString;
};

export { clean };
