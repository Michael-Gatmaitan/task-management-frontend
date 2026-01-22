import { create } from 'zustand';
import type { Task } from '@/index';

interface TaskState {
  showTaskModal: boolean;
  setShowTaskModal: (state: boolean) => void;
  task: Task | null,
  setCurrentTask: (task: Task | null) => void;
}

export const useTaskStore = create<TaskState>()((set) => ({
  showTaskModal: false,
  setShowTaskModal: (state: boolean) => set(() => ({showTaskModal: state})),
  task: null,
  setCurrentTask: (task: Task | null) => set(() => ({ task }))
}));