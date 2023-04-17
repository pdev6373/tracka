import { Need, NeedStatusEnum } from "../../../types";
const Needs: Need[] = [
  {
    id: "need 1",
    category: "Education",
    state: "Port harcourt",
    localGovernment: "Kosofe na wahale people",
    community: "Bariga community for here",
    representative: "Ladi Bot",
    status: NeedStatusEnum.Approved,
    author: {
      name: "Uju mako",
    },
    title:
      "Provide pipe borne water in health centre sdfasfads asdfadsfadsf asdfafdaaf asdf",
    votes: 40,
    created_at: "12/02/2012",
  },
  {
    id: "need 2",

    category: "health",
    state: "Lagos",
    localGovernment: "Kosofe",
    community: "Bariga",
    representative: "Innocent Edosa",
    status: NeedStatusEnum.Pending,
    author: { name: "oze" },
    title: "Provide pipe borne water in health centre",
    votes: 20,
    created_at: "12/02/2012",
    description:
      "This  id very boring need in the aba reactionThis is the description of a very",
  },
  {
    id: "need 3",
    category: "Water",
    state: "Lagos",
    localGovernment: "Ladipo",
    community: "Bariga",
    representative: "Innocent Edosa",
    status: NeedStatusEnum.Approved,
    author: { name: "some one" },
    title: "Provide pipe borne water in health centre",
    votes: 50,
    created_at: "12/02/2012",
  },
];

export default Needs;
