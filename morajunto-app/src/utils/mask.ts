export type Token = {
  pattern: RegExp;
};

const tokens: Record<string, Token> = {
  9: { pattern: /\d/ },
  a: { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[0-9a-zA-Z]/ },
};

export const masker = (value: string, mask: string): string => {
  let iMask = 0;
  let iValue = 0;
  let output = "";
  if (!value) return output;
  while (iMask < mask.length && iValue < value.length) {
    const cMask = mask[iMask] as keyof typeof tokens;
    const masker = tokens[cMask];
    const cValue = value[iValue];
    if (masker) {
      if (masker.pattern.test(cValue)) {
        output += cValue;
        iMask++;
      }
      iValue++;
    } else {
      output += cMask;
      if (cValue === cMask) iValue++;
      iMask++;
    }
  }
  return output;
};

export const unmask = (value: string, mask: string) => {
  let unmaskedValue = "";
  for (let i = 0; i < value.length; i++) {
    if (tokens[mask[i]]) {
      unmaskedValue += value[i];
    }
  }
  return unmaskedValue;
};
