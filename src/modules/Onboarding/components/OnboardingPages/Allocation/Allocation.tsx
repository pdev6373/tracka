import React from 'react';
import OnboardingCard from '../../../../../components/OnboardingCard';
const imageUrl = require("../../../../../assets/onboarding/onboardingAllocation.png")

export default function AllocationOnboarding() {
    return <OnboardingCard
    
    description="Having accountability for your budget allocation"
    heading="Know your allocation"
    imageUrl={imageUrl}
    />
}