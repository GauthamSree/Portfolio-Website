const header = {
  homepage: 'https://GauthamSree.github.io/Portfolio-Website',
  title: 'GS.',
}

const about = {
  name: 'Gautham Sreekumar',
  role: 'B.Tech Computer Science',
  description:
    'A fast learner passionate to find innovative solutions to complex engineering problems with good hands-on experience in Software Engineering, Machine learning, AI and Full-Stack Development.',
  resume: 'https://drive.google.com/file/d/1ynyumkdf27uSxbV5VkMC9buDW7_vSsNL/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/gautham-sreekumar-5662b318b',
    github: 'https://github.com/GauthamSree',
  },
}

const projects = [
  {
    name: 'Plant Leaf Disease Classification - ML Model and Web App',
    description:
      'Model developed using PyTorch and EfficientNet-B3 deep learning architecture with 99.875% accuracy. A Web App was developed using NodeJS and ReactJS, python library FastAPI (RestAPI) and deployed using Heroku and GitHub pages. Docker container was also made to run the web app locally.',
    stack: ['PyTorch', 'ReactJS', 'FastAPI', 'Docker', 'Heroku', 'Github Pages'],
    sourceCode: 'https://github.com/GauthamSree/Plant-Leaf-Disease-Classification',
    livePreview: 'https://gauthamsree.github.io/Plant-Leaf-Disease-Classification',
  },
  {
    name: 'Application of Meta-Heuristic Algorithms for 1D Bin Packing Problem',
    description:
      'Implemented Shuffled Frog Leaping Algorithm and Firebug Swarm Optimisation Algorithm for solving 1D BPP in Python. Compared both the algorithms using the Benchmark Dataset.',
    stack: ['Python'],
    sourceCode: 'https://github.com/GauthamSree/1D-Bin-Packing',
  },
  {
    name: 'Short-term Electric Load Forecasting using Transformer',
    description:
      'A deep learning model, Transformer has been developed using PyTorch and compared it with LSTM Model in predicting household electric load obtained from smart meters.',
    stack: ['PyTorch', 'Python', 'Numpy'],
    sourceCode: 'https://github.com/GauthamSree/Electric-Load-Prediction',
  }, 
  {
    name: 'Sage: The Healer',
    description:
      'Developed a Blood Bank System using ReactJS and Google Firebase.',
    stack: ['ReactJS', 'Google Firebase'],
    sourceCode: 'https://github.com/GauthamSree/BloodBankSystem',
  },
  {
    name: 'Data Encryption using Binary Tree',
    description:
      'Developed a Data Encryption program using Binary Tree in C and time complexity achieved was O(n).',
    stack: ['C'],
    sourceCode: 'https://github.com/GauthamSree/DataEncryption',
  },
]

const experience = [
  {
    name: 'Software Development Engineer Intern',
    company: 'Amazon',
    description:
      'Reducing Latency by deduplication of service calls in Deliveries Tab of Subscribe & Save Page (Ops Improvements). Created Automated UI testing framework which enhanced deployment cycle frequency on Subscribe & Save Page. Creation and QA testing of Category Filter on Subscription Tab of Subscribe & Save Page for Improvement in Customer Experience. Created dashboard for monitoring and tracking features usages across marketplaces. Did projects which improved visibility and clarity by enhancing the CX for Subscribe & Save Page. Worked on Java, proprietary software. Also Won “Just Do It” Award in PR Hackathon 2023.',
    stack: ['Java', 'JavaScript', 'Spring Boot', 'Spring MVC', 'JSP', 'JUnit', 'Mockito', 'XML']
  },
]

const skills = [
  'Python',
  'C/C++',
  'Java',
  'JSP',
  'Bash Scripting',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'FastAPI',
  'Docker',
  'Git',
  'CI/CD',
  'PyTorch',
  'QA Testing',
]

const interests = [
  'Software Engineering',
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Cyptography',
  'Web Development',
  'Cloud Computing',
  'DevOPS',
  'Problem Solving',
]

const contact = {
  email: 'gauthamsreekumar2001@gmail.com',
}

export { header, about, experience, projects, skills, interests, contact }
