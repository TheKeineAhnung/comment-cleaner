const clearGroupOne = function (content: string): string {
  const splittedContentSingleLine: string[] = content.split('\n');
  let clearedSingleLineContent = '';

  splittedContentSingleLine.forEach((elem): void => {
    if (!elem.trim().startsWith('//')) {
      if (!elem.includes('//')) {
        clearedSingleLineContent += `${elem.trimEnd()}\n`;
      } else {
        const splittedInlineComment: string[] = elem.split('//');

        clearedSingleLineContent += `${splittedInlineComment[0].trimEnd()}\n`;
      }
    }
  });

  const splittedContentMultiLine: string[] =
    clearedSingleLineContent.split('/*');

  let clearedMultiLineContent = '';

  do {
    let clearedMultiLineContentLoop = '';

    splittedContentMultiLine.forEach((elem): void => {
      if (elem.includes('*/')) {
        const end = elem.split('*/');

        clearedMultiLineContentLoop += end[1].trimEnd();
      } else {
        clearedMultiLineContentLoop += elem.trimEnd();
      }
    });

    clearedMultiLineContent = clearedMultiLineContentLoop;
  } while (clearedMultiLineContent.includes('/*'));

  const clearedContent = clearedMultiLineContent.trim();

  return clearedContent;
};

export { clearGroupOne };
