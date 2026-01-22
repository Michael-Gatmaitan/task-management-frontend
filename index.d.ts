interface TimeStamp {
  created_at: string;
  updated_at: string;
}

interface CreateProjectPayload {
  title: string;
  description: string|null;
}

interface CreateTaskPayload {
  title: string;
  description: string|null;
}

interface Project extends TimeStamp {
  id: string;
  title: string;
  description: string|null;
}

export interface Task extends TimeStamp {
  id: string;
  title: string;
  status: "pending"|"in_progress"|"completed";
  description: string|null;
}