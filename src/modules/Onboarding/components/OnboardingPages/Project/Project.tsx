import React from "react";
import OnboardingCard from "../../../../../components/OnboardingCard";
const imageUrl = require("../../../../../assets/onboarding/onboardingProject.png")

export default function Project() {
  return (
    <OnboardingCard
      description="Get to know more about projects around you"
      heading="Track projects around you"
      imageUrl={imageUrl}
    />
  );
}
