export type Perspective = {
  key: string;
  title: string;
  description: string;
};

export type PathOption = {
  title: string;
  question: string;
  description: string;
};

export type Framework = {
  question: string;
  method: string;
  insight: string;
};

export type MicroTopic = {
  title: string;
  description: string;
};

export type TopicRecord = {
  id: string;
  student_id: string;
  grade: string;
  subject: string;
  initial_topic: string;
  final_report_md: string;
  created_at: string;
};

export type ResearchState = {
  topic: string;
  direction: string;
  perspective?: Perspective;
  path?: PathOption;
  framework?: Framework;
  microTopic?: MicroTopic;
  finalReport?: string;
};
