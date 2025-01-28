const employees = [
    {
        "id": 1,
        "firstname": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Sales Report",
                "description": "Create a detailed sales report for Q1.",
                "date": "2025-02-01",
                "category": "Reports",
                "active": true,
                "new": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update CRM",
                "description": "Update client information in the CRM tool.",
                "date": "2025-02-02",
                "category": "Data Entry",
                "active": false,
                "new": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Meeting",
                "description": "Attend the weekly team meeting.",
                "date": "2025-02-03",
                "category": "Meetings",
                "active": false,
                "new": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Mockups",
                "description": "Create mockups for the new project.",
                "date": "2025-02-01",
                "category": "Design",
                "active": true,
                "new": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix Bugs",
                "description": "Resolve reported bugs from the testing phase.",
                "date": "2025-02-02",
                "category": "Development",
                "active": true,
                "new": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "new": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstname": "Kavya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Research Market Trends",
                "description": "Analyze market trends for Q2 planning.",
                "date": "2025-02-01",
                "category": "Research",
                "active": false,
                "new": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Submit Expense Report",
                "description": "Complete and submit expense claims.",
                "date": "2025-02-02",
                "category": "Finance",
                "active": false,
                "new": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Organize Files",
                "description": "Sort and organize digital files.",
                "date": "2025-02-03",
                "category": "Admin",
                "active": false,
                "new": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 0,
            "new": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstname": "Raj",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Customer Follow-up",
                "description": "Contact customers for feedback.",
                "date": "2025-02-01",
                "category": "Customer Service",
                "active": true,
                "new": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare Presentation",
                "description": "Create slides for the upcoming project demo.",
                "date": "2025-02-02",
                "category": "Presentation",
                "active": true,
                "new": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Submit Project Plan",
                "description": "Complete and submit the project timeline.",
                "date": "2025-02-03",
                "category": "Planning",
                "active": false,
                "new": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Ananya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Code Review",
                "description": "Review code submitted by team members.",
                "date": "2025-02-01",
                "category": "Development",
                "active": false,
                "new": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Update Documentation",
                "description": "Update technical documentation.",
                "date": "2025-02-02",
                "category": "Documentation",
                "active": true,
                "new": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Check Server Logs",
                "description": "Analyze server logs for performance issues.",
                "date": "2025-02-03",
                "category": "Maintenance",
                "active": true,
                "new": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstname": "Gaurang",
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}