import { IPlan } from "@/types";

export const freePlan: IPlan = {
  plan: "Free",
  price: "$0",
  desc: "Capture ideas and find them quickly",
  benefits: [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Add due dates, reminders, and notification to your tasks",
  ],
};

export const personalPlan: IPlan = {
  plan: "Personal",
  price: "$11.99",
  desc: "Keep home and family on track",
  benefits: [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Add due dates, reminders, and notification to your tasks",
  ],
};

export const organizationPlan: IPlan = {
  plan: "Organization",
  price: "$49.99",
  desc: "Capture ideas and find them quickly",
  benefits: [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Add due dates, reminders, and notification to your tasks",
  ],
};
