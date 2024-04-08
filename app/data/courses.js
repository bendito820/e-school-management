const courses = [
  {
    id: "1",
    title: "Informatica de Gestão",
    description: "Este é o curso de Informatica de Gestão...",
    createdAt: "31/01/2024",
  },
  {
    id: "2",
    title: "Gestão Empresarial",
    description: "Este é o curso de Gestão Empresarial...",
    createdAt: "31/01/2024",
  },
  {
    id: "3",
    title: "Mecanica dos Materiais",
    description: "Este é o curso de Mecanica dos Materiais...",
    createdAt: "31/01/2024",
  },
];

const addCourse = (course) => {
  course.id = courses.length + 1;
  courses.push(course);
};

const getCourses = () => courses;

const getCourse = (id) => courses.find((course) => course.id === id);

const filterCourse = (predicate) => courses.filter(predicate);

export { addCourse, getCourse, getCourses, filterCourse };
