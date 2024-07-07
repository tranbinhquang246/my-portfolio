import { ProjectType, StatusProjectType } from '@enum/project';
import { Project } from '@interfaces/project';

export const projects: Project[] = [
  {
    name: 'RabbIT System',
    description:
      'Guided and tutored computer engineering students at Ankara Science University in OOP and Java, resulting in all students passing. Through detailed explanations and relatable examples, helped students grasp the fundamental concepts of Object-Oriented Programming (OOP) and the Java programming language.',
    background: '/images/projects/rabbit.png',
    status: StatusProjectType.WORKING,
    skill: [
      'HTML',
      'CSS',
      'TailwindCSS',
      'NextJS-13',
      'Typescript',
      'React-Hook-Form',
      'Tanstack-Query',
      'Next-Auth',
      '...',
    ],
    time: '3 months',
    type: ProjectType.COMPANY,
    url: '',
  },
  {
    name: 'Refobell',
    description:
      'Through detailed explanations and relatable examples, helped students grasp the fundamental concepts of Object-Oriented Programming (OOP) and the Java programming language.',
    background: '/images/projects/refobell.jpeg',
    status: StatusProjectType.COMPLETE,
    skill: ['HTML', 'CSS', 'TailwindCSS', 'VueJS', 'Javascript', '...'],
    time: '3 months',
    type: ProjectType.COMPANY,
    url: 'https://system.refobell.com/',
  },
  {
    name: 'Kagomoto System',
    description:
      'Through detailed explanations and relatable examples, helped students grasp the fundamental concepts of Object-Oriented Programming (OOP) and the Java programming language.',
    background: '/images/projects/kagomoto.jpg',
    status: StatusProjectType.COMPLETE,
    skill: ['HTML', 'CSS', 'JQuery', 'Javascript'],
    time: '3 months',
    type: ProjectType.COMPANY,
    url: '',
  },
  {
    name: 'Soarig VietNam Homepage',
    description:
      'Through detailed explanations and relatable examples, helped students grasp the fundamental concepts of Object-Oriented Programming (OOP) and the Java programming language.',
    background: '/images/projects/soarig-vn.png',
    status: StatusProjectType.COMPLETE,
    skill: ['HTML', 'CSS', 'JQuery', 'Javascript'],
    time: '1.5 months',
    type: ProjectType.COMPANY,
    url: 'https://soarig.vn/',
  },
  {
    name: 'Office Dock System',
    description:
      'Guided and tutored computer engineering students at Ankara Science University in OOP and Java, resulting in all students passing. Through detailed explanations and relatable examples, helped students grasp the fundamental concepts of Object-Oriented Programming (OOP) and the Java programming language.',
    background: '/images/projects/office-dock.png',
    status: StatusProjectType.WORKING,
    skill: [
      'HTML',
      'CSS',
      'TailwindCSS',
      'NextJS-14',
      'Typescript',
      'React-Hook-Form',
      'Tanstack-Query',
      'Next-Auth',
      '...',
    ],
    time: '',
    type: ProjectType.COMPANY,
    url: '',
  },
];
