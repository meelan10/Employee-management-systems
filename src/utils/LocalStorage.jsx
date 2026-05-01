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
  email: 'admin@example.com',
  password: '123'
}]

export const setLocalStorage = () => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  if (typeof window === 'undefined' || !window.localStorage) return { employees: [], admin: [] }

  const storedEmployees = localStorage.getItem('employees')
  const storedAdmin = localStorage.getItem('admin')

  let parsedEmployees = []
  let parsedAdmin = []

  try {
    parsedEmployees = storedEmployees ? JSON.parse(storedEmployees) : []
  } catch (error) {
    parsedEmployees = []
  }

  try {
    parsedAdmin = storedAdmin ? JSON.parse(storedAdmin) : []
  } catch (error) {
    parsedAdmin = []
  }

  return { employees: parsedEmployees, admin: parsedAdmin }
}

export const setCurrentUser = (user) => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.setItem('currentUser', JSON.stringify(user))
}

export const getCurrentUser = () => {
  if (typeof window === 'undefined' || !window.localStorage) return null

  try {
    return JSON.parse(localStorage.getItem('currentUser'))
  } catch (error) {
    return null
  }
}

export const clearCurrentUser = () => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.removeItem('currentUser')
}
