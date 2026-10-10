const projects = [
  {
    id: 1,
    category: "Frontend · Full-stack",
    title: "ExpenseFlow",
    description:
      "A personal finance tracker built with vanilla HTML, CSS and JavaScript. Track your income and expenses by category, analyse monthly spending with an animated doughnut chart, set a monthly budget with an exceeded warning, switch between 80+ currencies, and toggle dark mode across all pages. All data is stored in MongoDB.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    link: "https://esimisan.github.io/Expense-flow-tracker/",
    linkLabel: "Live demo",
  },
  {
    id: 2,
    category: "Frontend",
    title: "Focusly",
    description:
      "A multi-page productivity web app for managing tasks, tracking goals, and running focus sessions, built with vanilla HTML, CSS, and JavaScript as a deep-dive into core web fundamentals. Data persists via localStorage.",
    tags: ["HTML", "CSS", "JavaScript", "localStorage"],
    link: "https://foucsly.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    id: 3,
    category: "Computational Drug Discovery",
    title:
      "Virtual Screening of Natural Compounds Against Acetylcholinesterase (AChE) for Alzheimer's Disease",
    description:
      "A computational drug discovery project where I screened 27 naturally occurring compounds against human Acetylcholinesterase to look for candidates with potential cholinesterase inhibitory activity relevant to Alzheimer's disease, using Python to automate the ligand download process and to represent the results on a bar chart.",
    tags: ["Python", "Virtual Screening", "AChE", "Alzheimer's"],
    link: "https://github.com/Esimisan/Virtual-Screening-of-Natural-Compounds-Against-Acetylcholinesterase",
    linkLabel: "View on GitHub",
  },
];

export default projects;
