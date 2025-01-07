
const employees = [
    {
        "id": 1,
        "firstName": "Ayesha",
        "email": "ayesha@gmail.com",
        "password": "ayesha123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market research",
                "taskDescription": "Gather data on target audiences",
                "taskDate": "2024-11-05",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "API integration",
                "taskDescription": "Integrate payment gateway APIs",
                "taskDate": "2024-11-02",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Rahul",
        "email": "rahul@example.com",
        "password": "rahulPass",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "User testing",
                "taskDescription": "Conduct usability testing for new app version",
                "taskDate": "2024-11-06",
                "category": "QA"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Plan roadmap",
                "taskDescription": "Outline tasks for the next sprint",
                "taskDate": "2024-11-04",
                "category": "Planning"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Discuss progress and next steps",
                "taskDate": "2024-10-31",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Meera",
        "email": "meera@example.com",
        "password": "meera@456",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create wireframes",
                "taskDescription": "Design wireframes for the mobile app",
                "taskDate": "2024-11-07",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Bug fixing",
                "taskDescription": "Fix critical bugs in the latest release",
                "taskDate": "2024-11-01",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Submit report",
                "taskDescription": "Submit the monthly performance report",
                "taskDate": "2024-10-29",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Siddharth",
        "email": "sid@example.com",
        "password": "sid007",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code optimization",
                "taskDescription": "Improve code efficiency and performance",
                "taskDate": "2024-11-03",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Presentation review",
                "taskDescription": "Review client presentation for feedback",
                "taskDate": "2024-10-30",
                "category": "Review"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Product demo",
                "taskDescription": "Present demo to potential clients",
                "taskDate": "2024-10-28",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Ananya",
        "email": "ananya@example.com",
        "password": "Ananya!2024",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client onboarding",
                "taskDescription": "Prepare materials for onboarding new clients",
                "taskDate": "2024-11-08",
                "category": "Support"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Test deployment",
                "taskDescription": "Deploy test build to staging environment",
                "taskDate": "2024-11-06",
                "category": "DevOps"
            }
        ]
    }
];



const admin = [{
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
