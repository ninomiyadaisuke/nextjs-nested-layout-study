export type Styles = {
  counter: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
