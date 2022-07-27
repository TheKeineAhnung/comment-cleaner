import { assert } from 'assertthat';
import { languageCommentGroupAssignment } from '../../../lib/langs/languageCommentGroupAssignment';
import { SupportedLanguages } from '../../../lib/langs/SupportedLanguages';

suite('groupAssignment', (): void => {
  suite('groupOne', (): void => {
    const groupOne: SupportedLanguages[] = [
      'c',
      'c#',
      'c++',
      'go',
      'java',
      'js',
      'kotlin',
      'ts'
    ];

    for (const key of groupOne) {
      test(`test if '${key}' is assigned to group 1.`, async (): Promise<void> => {
        const output: number = languageCommentGroupAssignment[key];

        assert.that(output).is.equalTo(1);
      });
    }
  });

  suite('groupTwo', (): void => {
    const groupTwo: SupportedLanguages[] = ['python'];

    for (const key of groupTwo) {
      test(`test if '${key}' is assigned to group 2.`, async (): Promise<void> => {
        const output: number = languageCommentGroupAssignment[key];

        assert.that(output).is.equalTo(2);
      });
    }
  });

  suite('groupThree', (): void => {
    const groupThree: SupportedLanguages[] = ['html'];

    for (const key of groupThree) {
      test(`test if '${key}' is assigned to group 3.`, async (): Promise<void> => {
        const output: number = languageCommentGroupAssignment[key];

        assert.that(output).is.equalTo(3);
      });
    }
  });

  suite('groupFour', (): void => {
    const groupFour: SupportedLanguages[] = ['sql'];

    for (const key of groupFour) {
      test(`test if '${key}' is assigned to group 4.`, async (): Promise<void> => {
        const output: number = languageCommentGroupAssignment[key];

        assert.that(output).is.equalTo(4);
      });
    }
  });
});
