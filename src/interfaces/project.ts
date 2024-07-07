import { ProjectType, StatusProjectType } from '@enum/project';

export interface Project {
  name: string;
  description: string;
  background: string;
  status: StatusProjectType;
  skill: string[];
  time: string;
  type: ProjectType;
  url: string;
}
