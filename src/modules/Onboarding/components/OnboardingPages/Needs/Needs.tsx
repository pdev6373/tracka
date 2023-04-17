import React from 'react';
import OnboardingCard from '../../../../../components/OnboardingCard';
const imageUrl = require("../../../../../assets/onboarding/onboardingNeed.png")

export default function NeedOnboarding() {
    return <OnboardingCard 
    
    description="A problem well stated is a problem half-solved"
    heading="Submit community need"
    imageUrl={imageUrl}
    />
}