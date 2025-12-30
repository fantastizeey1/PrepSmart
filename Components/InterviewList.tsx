import InterviewCard from "./InterviewCard";

interface InterviewListProps {
  interviews: Interview[];
  feedbacks?: Feedback[];
  emptyMessage?: string;
}

const InterviewList = ({
  interviews,
  feedbacks,
  emptyMessage,
}: InterviewListProps) => {
  if (!interviews?.length) {
    return <p>{emptyMessage || "No interviews available"}</p>;
  }

  return (
    <div className="interviews-section">
      {interviews.map((interview) => {
        const feedback = feedbacks?.find(
          (feedback) => feedback.interviewId === interview.id
        );

        return (
          <InterviewCard
            key={interview.id}
            interview={interview}
            feedback={feedback}
          />
        );
      })}
    </div>
  );
};

export default InterviewList;
