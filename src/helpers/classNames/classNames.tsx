type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames, value]) => classNames),
  ].join(" ");
}

// classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
//   "class1",
//   "class2",
// ]);
