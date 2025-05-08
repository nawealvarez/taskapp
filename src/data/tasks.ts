interface Task {
  status: string;
  number: number;
  spec: string;
  rev: number;
  title: string;
  type: string;
  priority: string;
  package: string;
  ballInCourt: string;
  dueDate: string;
  response: string;
}

const tasks: Task[] = [
  {
    status: 'Closed',
    number: 8125,
    spec: '000000 Attachments',
    rev: 0,
    title: 'Testaaaew',
    type: '568e6979-6958-',
    priority: 'Normal',
    package: '-',
    ballInCourt: 'Diane Li - Allied Architects',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8121,
    spec: '90 Samruddhhi',
    rev: 0,
    title: 'Samrudhi Submitakdjkfjkfe',
    type: 'O&M Manuals',
    priority: 'Normal',
    package: '-',
    ballInCourt: 'Samruddhi Kawathekar',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8119,
    spec: 'cheesec cheesecake plea...',
    rev: 1,
    title: '@@',
    type: 'Attic stock custo',
    priority: 'Normal',
    package: 'cheesec-002 new pakg',
    ballInCourt: 'Abhishek Garg - Golden Gate',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8110,
    spec: '09-5300 Acoustical Ceilings',
    rev: 0,
    title: 'Product Data',
    type: 'Type import',
    priority: 'Normal',
    package: '-',
    ballInCourt: 'Gal Karlan - Autodesk',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8092,
    spec: '09-5300 Acoustical Ceilings',
    rev: 0,
    title: '4Shop Drawings - Space b...',
    type: 'Ziv Type1',
    priority: 'Normal',
    package: '-',
    ballInCourt: '1003s 1003sp - ACS BIM for Construct...',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8085,
    spec: '09-5300 Acoustical Ceilings',
    rev: 1,
    title: '4Shop Drawings - Space b...',
    type: 'Ziv Type1',
    priority: 'Normal',
    package: '-',
    ballInCourt: 'Justine Triola - Golden Gate',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8063,
    spec: '12 test specct new',
    rev: 0,
    title: 'import back com',
    type: 'Attic stock custo',
    priority: 'High',
    package: '-',
    ballInCourt: 'Sapir Stavi',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8061,
    spec: '04-0110 Masonry Clean...',
    rev: 0,
    title: 'test activities flow 2',
    type: '4bb7caf-88c6-4',
    priority: 'Normal',
    package: '-',
    ballInCourt: 'Ziv Sher - Golden Gate',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8060,
    spec: '000000 Attachments',
    rev: 0,
    title: 'test activities flow',
    type: 'zfsaaad标题',
    priority: 'Normal',
    package: '0000017-148 Package filte...',
    ballInCourt: 'Ziv Sher - Golden Gate',
    dueDate: '-',
    response: 'Approve',
  },
  {
    status: 'Closed',
    number: 8059,
    spec: 'cheesec cheesecake plea...',
    rev: 0,
    title: 'new item',
    type: 'Attic stock custo',
    priority: 'Normal',
    package: 'cheesec-007 Tesa子等级库...',
    ballInCourt: 'Karan Bhandari - Golden Gate',
    dueDate: '-',
    response: 'Approve',
  },
];

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i.toString(),
  status: i % 2 === 0 ? 'pending' : 'success',
  amount: Math.floor(Math.random() * 100),
  email: 'm@example.com',
}));

export { tasks, data };
