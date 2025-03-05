type Candidate = {
  name: string;
  avatar: string;
  price: string;
  category: string;
  experience: string;
  englishLevel: string;
  skills: string[];
  description: string;
};

export const candidatesArr: Candidate[] = [
  {
    name: "QA Enganeer",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264294/avatar_erfvrk.png",
    price: "$500",
    category: "QA Manual",
    experience: "Менше року",
    englishLevel: "Intermediate",
    skills: [
      "Designer/UI/UX",
      "Java",
      "PHP",
      "Node.js",
      "Golang",
      "JavaScript / Frontend",
    ],
    description:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  },
  {
    name: "Backend Developer",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264150/boy-2_mjsbfw.png",
    price: "$1000",
    category: "Java",
    experience: "2 роки",
    englishLevel: "Advanced",
    skills: ["Java", "Python", "SQL", "Node.js", "Git", "AWS"],
    description:
      "Experienced backend developer with a focus on scalability. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    name: "Frontend Developer",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264893/girl-1_kwvcbl.png",
    price: "$1000",
    category: "Golang",
    experience: "3 роки",
    englishLevel: "Upper Intermediate",
    skills: [
      "JavaScript",
      "React",
      "CSS",
      "HTML",
      "Golang",
      "Git",
      "TypeScript",
    ],
    description:
      "Skilled in building responsive and user-friendly web applications. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    name: "UI/UX Designer",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264747/%D1%84%D0%BE%D1%82%D0%BE2222_dysicf.png",
    price: "$500",
    category: "Designer/UI/UX",
    experience: "4 роки",
    englishLevel: "Upper Intermediate",
    skills: ["Sketch", "Figma", "Adobe XD", "Photoshop"],
    description:
      "Creative designer with a passion for user-centered design. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    name: "Data Scientist",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264599/15555_tt6nkw.png",
    price: "$500",
    category: "Python",
    experience: "3 роки",
    englishLevel: "Advanced",
    skills: ["Python", "R", "Machine Learning", "Data Visualization"],
    description:
      "Focused on deriving insights from large datasets to drive decision-making. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    name: "JavaScript / Frontend Developer",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264578/171735_vqpnpn.png",
    price: "$1000",
    category: "JavaScript / Frontend",
    experience: "5 років",
    englishLevel: "Fluent",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git", "GraphQL"],
    description:
      "Frontend developer with a focus on delivering high-performance applications. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    name: "Project Manager",
    avatar:
      "https://res.cloudinary.com/dqcmd364w/image/upload/v1729264527/%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87_2%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0_rqobd6.jpg",
    price: "$300",
    category: "Project Management",
    experience: "Менше року",
    englishLevel: "Intermediate",
    skills: ["Agile", "Scrum", "JIRA", "Trello", "Leadership"],
    description:
      "Experienced project manager with a history of successful project delivery. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];
