const store = {
  budgetRegisters: [],
  rooms: [
    {
      name: "kitchen",
      devices: [
        {
          name: "cooker",
          power: 3000,
          voltage: 220,
          heat: [22, 31, 42, 36, 45, 52],
        },
      ],
    },
    {
      name: "bedroom",
      devices: [
        {
          name: "phone charger",
          power: 3000,
          voltage: 220,
          heat: [22, 31, 42, 36, 45, 52],
        },
        {
          name: "television",
          power: 3000,
          voltage: 220,
          heat: [22, 31, 42, 36, 45, 52],
        },
      ],
    },
    {
      name: "bathroom",
      devices: [
        {
          name: "hairdryer",
          power: 3000,
          voltage: 220,
          heat: [22, 31, 42, 36, 45, 52],
        },
      ],
    },
  ],
};

export default store;
