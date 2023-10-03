export type SelectButtonProps = {
  title: string;
  type?: isYesOrNo;
};

export type isYesOrNo = "YES" | "NO";

export type StyleProps = {
  type: isYesOrNo;
};
