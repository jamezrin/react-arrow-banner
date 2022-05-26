export const cx = (originalClassName: string | undefined, appendedClassName: string) =>
  (originalClassName ? originalClassName + ' ' : '') + appendedClassName;