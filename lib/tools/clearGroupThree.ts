const clearGroupThree = function (content: string): string {
  let clearedMultiLineContent = '';
  const splittedContentMultiLine: string[] = content.split('<!--');

  do {
    let clearedMultiLineContentLoop = '';

    splittedContentMultiLine.forEach((elem): void => {
      if (elem.includes('-->')) {
        const end = elem.split('-->');

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

export { clearGroupThree };
