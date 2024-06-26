export const IPlansDefs = ["Free", "Personal", "Organization"] as const;
export type IPlansType = (typeof IPlansDefs)[number];

export interface IPlan {
  plan: IPlansType;
  price: string;
  desc: string;
  benefits: string[];
}
