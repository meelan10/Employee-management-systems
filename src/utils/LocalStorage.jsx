const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design UI",
        description: "Create homepage UI design",
        date: "2026-04-27",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix bugs",
        description: "Resolve login bugs",
        date: "2026-04-20",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "API integration",
        description: "Connect frontend to backend",
        date: "2026-04-28",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write docs",
        description: "Prepare project documentation",
        date: "2026-04-27",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy app",
        description: "Deploy on server",
        date: "2026-04-22",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test features",
        description: "Test payment system",
        date: "2026-04-25",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create logo",
        description: "Design app logo",
        date: "2026-04-27",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update UI",
        description: "Improve dashboard UI",
        date: "2026-04-29",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix CSS",
        description: "Fix responsive issues",
        date: "2026-04-23",
        category: "Frontend"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database setup",
        description: "Setup MongoDB",
        date: "2026-04-27",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize queries",
        description: "Improve DB performance",
        date: "2026-04-21",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Backup data",
        description: "Create backup system",
        date: "2026-04-24",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "User testing",
        description: "Collect user feedback",
        date: "2026-04-27",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Improve UX",
        description: "Enhance user experience",
        date: "2026-04-30",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix navigation",
        description: "Improve routing",
        date: "2026-04-22",
        category: "Frontend"
      }
    ]
  }
];

const admin = [{
  id: 0,
  email: "admin@example.com",
  password: "123"
}];

export const  setLocalStorage=() => {
  localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const  getLocalStorage=() => {
  const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees}

  
}