import React from 'react'
 import {Button} from "@/Components/ui/button";
 import Link from "next/link";
 import Image from "next/image";
 import {dummyInterviews} from "@/constants";
 import InterviewCard from "@/Components/InterviewCard";
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action';
 
 const Page = async() => {
  const user = await getCurrentUser();

  const [userInterviews, latestIntervies ] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({
      userId: user?.id!,})

  ])
 
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestIntervies?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
  
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
  
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>
  
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">

          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="no-interviews">
              <p>You have no past interviews.</p>
              <Link href="/interview" className="btn-primary">
                Take an Interview
              </Link>
            </div>
          )}
          
        </div>
      </section>
  
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
        {hasUpcomingInterviews ? (
            latestIntervies?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="no-interviews">
              <p>There are no new interveiws available</p>
              <Link href="/interview" className="btn-primary">
                Take an Interview
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
  
  
 }
 export default Page