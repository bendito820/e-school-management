const groups = [
  // Turma A
  {
    id: "1",
    title: "Turma A",
    description: "Esta é a Turma A do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "1",
  },
  {
    id: "1",
    title: "Turma A",
    description: "Esta é a Turma A do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "1",
  },
  {
    id: "1",
    title: "Turma A",
    description: "Esta é a Turma A do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "1",
  },
  {
    id: "2",
    title: "Turma A",
    description: "Este é Turma A do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "2",
  },
  {
    id: "2",
    title: "Turma A",
    description: "Este é Turma A do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "2",
  },
  {
    id: "2",
    title: "Turma A",
    description: "Este é Turma A do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "2",
  },
  {
    id: "3",
    title: "Turma A",
    description: "Este é a 10 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "3",
  },
  {
    id: "3",
    title: "Turma A",
    description: "Este é a 10 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "3",
  },
  {
    id: "3",
    title: "Turma A",
    description: "Este é a 10 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "3",
  },

  // Turma B
  {
    id: "4",
    title: "11 ª Classe",
    description: "Esta é a 11 ª Classe do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "4",
  },
  {
    id: "4",
    title: "11 ª Classe",
    description: "Esta é a 11 ª Classe do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "4",
  },
  {
    id: "4",
    title: "11 ª Classe",
    description: "Esta é a 11 ª Classe do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "4",
  },
  {
    id: "5",
    title: "11 ª Classe",
    description: "Este é 11 ª Classe do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "5",
  },
  {
    id: "5",
    title: "11 ª Classe",
    description: "Este é 11 ª Classe do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "5",
  },
  {
    id: "5",
    title: "11 ª Classe",
    description: "Este é 11 ª Classe do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "5",
  },
  {
    id: "6",
    title: "11 ª Classe",
    description: "Este é a 11 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "6",
  },
  {
    id: "6",
    title: "11 ª Classe",
    description: "Este é a 11 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "6",
  },
  {
    id: "6",
    title: "11 ª Classe",
    description: "Este é a 11 ª Classe do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "6",
  },

  // Turma C
  {
    id: "7",
    title: "Turma C",
    description: "Esta é a Turma C do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "7",
  },
  {
    id: "7",
    title: "Turma C",
    description: "Esta é a Turma C do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "7",
  },
  {
    id: "7",
    title: "Turma C",
    description: "Esta é a Turma C do curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
    classId: "7",
  },
  {
    id: "8",
    title: "Turma C",
    description: "Este é Turma C do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "8",
  },
  {
    id: "8",
    title: "Turma C",
    description: "Este é Turma C do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "8",
  },
  {
    id: "8",
    title: "Turma C",
    description: "Este é Turma C do curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
    classId: "8",
  },
  {
    id: "9",
    title: "Turma C",
    description: "Este é a Turma C do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "9",
  },
  {
    id: "9",
    title: "Turma C",
    description: "Este é a Turma C do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "9",
  },
  {
    id: "9",
    title: "Turma C",
    description: "Este é a Turma C do curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
    classId: "9",
  },
];

const addGroups = (course) => {
  course.id = classes.length + 1;
  classes.push(course);
};

const getGroups = () => groups;

const getGroupById = (id) => groups.find((classe) => classe.id === id);

const getGroupsByClasseId = (classId) => {
  const filteredGrous = groups.filter((group) => group.classId === classId);
  return filteredGrous;
};

const filterGroup = (predicate) => groups.filter(predicate);

export { addGroups, filterGroup, getGroupById, getGroups, getGroupsByClasseId };
