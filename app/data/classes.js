const classes = [
  // 10 ª Classe
  {
    id: "1",
    title: "10 ª Classe",
    description: "Esta é a 10 ª Classe do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    courseId: "1",
  },
  {
    id: "2",
    title: "10 ª Classe",
    description: "Este é 10 ª Classe do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    courseId: "2",
  },
  {
    id: "3",
    title: "10 ª Classe",
    description: "Este é a 10 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    courseId: "3",
  },

  // 11 ª Classe
  {
    id: "4",
    title: "11 ª Classe",
    description: "Esta é a 11 ª Classe do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    courseId: "1",
  },
  {
    id: "5",
    title: "11 ª Classe",
    description: "Este é 11 ª Classe do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    courseId: "2",
  },
  {
    id: "6",
    title: "11 ª Classe",
    description: "Este é a 11 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    courseId: "3",
  },

  // 12 ª Classe
  {
    id: "7",
    title: "12 ª Classe",
    description: "Esta é a 12 ª Classe do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    courseId: "1",
  },
  {
    id: "8",
    title: "12 ª Classe",
    description: "Este é 12 ª Classe do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    courseId: "2",
  },
  {
    id: "9",
    title: "12 ª Classe",
    description: "Este é a 12 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    courseId: "3",
  },
];

const addClasse = (course) => {
  course.id = classes.length + 1;
  classes.push(course);
};

const getClasses = () => classes;

const getClasseById = (id) => classes.find((classe) => classe.id === id);

const getClassesByCourseId = (courseId) => {
  const filteredClasses = classes.filter(
    (classe) => classe.courseId === courseId
  );
  return filteredClasses;
};

const filterClasse = (predicate) => classes.filter(predicate);

export {
  addClasse,
  getClasseById,
  getClasses,
  filterClasse,
  getClassesByCourseId,
};
