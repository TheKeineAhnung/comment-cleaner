import { SupportedLanguages } from './SupportedLanguages';

const languageCommentGroupAssignment: Record<SupportedLanguages, number> = {
  // eslint-disable-next-line id-length
  c: 1,
  'c#': 1,
  'c++': 1,
  go: 1,
  html: 3,
  java: 1,
  js: 1,
  kotlin: 1,
  python: 2,
  sql: 4,
  ts: 1
};

export { languageCommentGroupAssignment };
