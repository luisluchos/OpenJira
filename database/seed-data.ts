interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "pending",
      status: "pending",
      createdAt: 1659100683607,
    },
    {
      description: "in progress",
      status: "in-progress",
      createdAt: 1659100683607,
    },
    {
      description: "finished",
      status: "finished",
      createdAt: 1659100683607,
    },
  ],
};
