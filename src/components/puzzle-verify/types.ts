export type SliderStatus = "default" | "success" | "fail";
export type PuzzleType = "modal" | "insert" | "popover";

export interface Props {
  type?: PuzzleType;
  visible?: boolean;
}