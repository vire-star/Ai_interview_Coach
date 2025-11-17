import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { industries } from '@/data/industries'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/dist/server/api-utils'

const OnboardingPage = async() => {
   const {isOnboarded}= await getUserOnboardingStatus()
   if(isOnboarded){
    redirect("/dashboard")
   }
  return (
    <div>
        <OnboardingForm industries={industries}/>
    </div>
  )
}

export default OnboardingPage