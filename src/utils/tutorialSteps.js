export const tutorialSteps = [
  {
    id: "essence_1",
    screen: "Home",
    text: (phantomName) => `${phantomName}'s life force`,
  },
  {
    id: "essence_2",
    screen: "Home",
    text: (phantomName) =>
      `Performing certain rituals with ${phantomName} depletes essence.`,
  },
  {
    id: "manifestation_1",
    screen: "Home",
    text: (phantomName) => `Determines ${phantomName}'s presence`,
  },
  {
    id: "manifestation_2",
    screen: "Home",
    text: "Manifestation depletes over time, and can be restored performing certain rituals.",
  },
  {
    id: "mischief",
    screen: "Home",
    text: (phantomName) => `Determines how chaotic ${phantomName} feels.`,
  },
  {
    id: "ritualsTab", // pop up when you first enter rituals screen
    screen: "Home",
    text: (phantomName) =>
      `Use rituals to calm, empower, play with or discipline ${phantomName}`,
  },
  {
    id: "channel",
    screen: "Rituals",
    text: (phantomName) =>
      `'Channel' strengthens ${phantomName}'s manifestation and reduces essence.`,
  },
  {
    id: "tease",
    screen: "Rituals",
    text: (phantomName) =>
      `'Tease' puts ${phantomName} in a playful mood and lowers mischief and essence.`,
  },
  {
    id: "banish",
    screen: "Rituals",
    text: (phantomName) =>
      `'Banish' uses essence to discipline ${phantomName} and forces mischief level down, but makes ${phantomName} angry at you.`,
  },
  {
    id: "commune",
    screen: "Rituals",
    text: (phantomName) =>
      `'Commune' is a meditation that restores essence and puts ${phantomName} in a serene mood.`,
  },
];
