import type { Task } from '@/index';
import { create } from 'zustand';

interface TaskState {
  showTaskModal: boolean;
  currentTaskId: string|null;
  setShowTaskModal: (state: boolean) => void;
  setCurrentTaskId: (id: string) => void;
  task: Task | null,
  setCurrentTask: (task: Task | null) => void;
}

export const useTaskStore = create<TaskState>()((set) => ({
  showTaskModal: true,
  currentTaskId: null,
  setShowTaskModal: (state: boolean) => set(() => ({showTaskModal: state})),
  setCurrentTaskId: (id: string) => set(() => ({ currentTaskId: id })),
  task: null,
  setCurrentTask: (task: Task | null) => set(() => ({ task }))
}));