export type Styles = {
  layout: string;
  layout__sidebar: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
