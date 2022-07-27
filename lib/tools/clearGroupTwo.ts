const clearGroupTwo = function (content: string): string {
  const splittedContentSingleLine: string[] = content.split('\n');
  let clearedSingleLineContent = '';

  splittedContentSingleLine.forEach((elem): void => {
    if (!elem.trim().startsWith('#')) {
      if (!elem.includes('#')) {
        clearedSingleLineContent += `${elem.trim()}\n`;
      } else {
        const splittedInlineComment: string[] = elem.split('#');

        clearedSingleLineContent += `${splittedInlineComment[0].trim()}\n`;
      }
    }
  });

  const clearedContent = clearedSingleLineContent.trim();

  return clearedContent;
};

export { clearGroupTwo };
