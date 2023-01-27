export const trim = (str: string, symbols = ` `) => {
  if (symbols === ` `) {
    return str.trim();
  }

  const reg = new RegExp(`[${symbols}]`, `gi`);
  return str.replace(reg, ``);
};
