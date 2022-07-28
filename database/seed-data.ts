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
      createdAt: Date.now(),
    },
    {
      description: "in progress",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      description: "finished",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};
