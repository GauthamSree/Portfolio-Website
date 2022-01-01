const header = {
  homepage: 'https://gauthamsreekumar.github.io/portfolio-website',
  title: 'GS.',
}

const about = {
  name: 'Gautham Sreekumar',
  role: '3rd Year CSE Student',
  description:
    'An enthusiastic learner passionate to find innovative solutions to complex engineering problems with good hands-on experience in Data Science, Machine learning, AI and Software Engineering.',
  resume: 'https://example.com',
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

const skills = [
  'Python',
  'C/C++',
  'Java',
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
]

const interests = [
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

export { header, about, projects, skills, interests, contact }
