import TeamTable from "./TeamTable/TeamTable";

const TeamTableContainer = () => {
  const teams = [
    {
      team: {
        id: "1",
        name: "Team A",
      },
      employees: [
        {
          id: "1",
          name: "Emilio",
          last_name: "Martinez",
          email: "emilio@ibm.mx",
          role: "Front-End Developer",
        },
        {
          id: "2",
          name: "Gael",
          last_name: "Laporta",
          email: "gael@ibm.mx",
          role: "Front-End Developer",
        },
        {
          id: "3",
          name: "Juan Pablo",
          last_name: "Perez Duran",
          email: "juan@ibm.mx",
          role: "UX/UI Designer",
        },
        {
          id: "4",
          name: "Alyx",
          last_name: "Miranda",
          email: "alyx@ibm.mx",
          role: "Back-End Developer",
        },
        {
          id: "5",
          name: "Alejandro",
          last_name: "Rodri",
          email: "alex@ibm.mx",
          role: "Back-End Developer",
        },
      ],
      manager: {
        id: "1",
        name: "Ken",
        last_name: "Bauer",
        email: "ken@ibm.mx",
        role: "Manager",
      },
    },
    {
      team: {
        id: "2",
        name: "Team B",
      },
      employees: [
        {
          id: "6",
          name: "Sara",
          last_name: "Garcia",
          email: "sara@ibm.mx",
          role: "Front-End Developer",
        },
        {
          id: "7",
          name: "Andres",
          last_name: "Mendez",
          email: "andres@ibm.mx",
          role: "Back-End Developer",
        },
        {
          id: "8",
          name: "Maria",
          last_name: "Lopez",
          email: "maria@ibm.mx",
          role: "UX/UI Designer",
        },
        {
          id: "7",
          name: "Andres",
          last_name: "Mendez",
          email: "andres@ibm.mx",
          role: "Back-End Developer",
        },
        {
          id: "8",
          name: "Maria",
          last_name: "Lopez",
          email: "maria@ibm.mx",
          role: "UX/UI Designer",
        },
      ],
      manager: {
        id: "2",
        name: "Carla",
        last_name: "Jimenez",
        email: "carla@ibm.mx",
        role: "Manager",
      },
    },
    {
      team: {
        id: "3",
        name: "Team C",
      },
      employees: [
        {
          id: "9",
          name: "Luis",
          last_name: "Mendez",
          email: "luis@ibm.mx",
          role: "Back-End Developer",
        },
        {
          id: "10",
          name: "Ana",
          last_name: "Gonzalez",
          email: "ana@ibm.mx",
          role: "Front-End Developer",
        },
        {
          id: "11",
          name: "Oscar",
          last_name: "Rodriguez",
          email: "oscar@ibm.mx",
          role: "UX/UI Designer",
        },
        {
          id: "10",
          name: "Ana",
          last_name: "Gonzalez",
          email: "ana@ibm.mx",
          role: "Front-End Developer",
        },
        {
          id: "11",
          name: "Oscar",
          last_name: "Rodriguez",
          email: "oscar@ibm.mx",
          role: "UX/UI Designer",
        },
      ],
      manager: {
        id: "3",
        name: "Manuel",
        last_name: "Garcia",
        email: "manuel@ibm.mx",
        role: "Manager",
      },
    },
  ];

  return <TeamTable teams={teams} />;
};

export default TeamTableContainer;
