# Project Management Tool  

## Overview  
The **Project Management Tool** is a comprehensive solution designed to streamline project planning, execution, and monitoring. Built using the **MERN stack** (MongoDB, Express.js, React, and Node.js), this tool provides a scalable, robust, and user-friendly platform for managing projects of any size.  

## Features  
✅ **User Roles & Permissions**  
   - Project Manager, Team Lead, and Team Member roles.  
   - Role-based access control for secure operations.  

✅ **Project & Task Management**  
   - Project creation and assignment of Team Leads.  
   - Task allocation, tracking, and status updates (`To Do`, `In Progress`, `Done`).  

✅ **Real-time Notifications**  
   - WebSocket-based notifications for task updates.  
   - Unread notifications stored in MongoDB.  

✅ **Task Progress Tracking**  
   - Task history to track changes.  
   - Deadlines, milestones, and progress monitoring.  

✅ **Scalability & Performance**  
   - Optimized database queries using indexing and projection.  
   - WebSockets for real-time updates and efficient communication.  

## Tech Stack  
**Frontend:** React, Vite, Tailwind CSS  
**Backend:** Express.js, GraphQL, Node.js  
**Database:** MongoDB (Mongoose)  
**Authentication:** JWT, OAuth (Google, GitHub, Facebook)  
**Real-time Updates:** Socket.io (WebSockets)  

## Installation & Setup  

### Prerequisites  
Ensure you have **Node.js** and **MongoDB** installed on your machine.  

### Backend Setup  
1. Clone the repository:  
   ```sh  
   git clone https://github.com/your-repo/project-management-tool.git  
   cd project-management-tool/backend  
   ```  
2. Install dependencies:  
   ```sh  
   npm install  
   ```  
3. Create a `.env` file and configure the environment variables:  
   ```env  
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_secret_key  
   ```  
4. Start the backend server:  
   ```sh  
   npm run dev  
   ```  

### Frontend Setup  
1. Navigate to the frontend folder:  
   ```sh  
   cd ../frontend  
   ```  
2. Install dependencies:  
   ```sh  
   npm install  
   ```  
3. Start the frontend:  
   ```sh  
   npm run dev  
   ```  

## API Endpoints (GraphQL)  
- **Authentication:** Login, Register  
- **Projects:** Create, Assign Team Leads  
- **Tasks:** Assign, Update Status, Fetch Task History  
- **Notifications:** Fetch Unread Notifications  

## Contribution  
Contributions are welcome! Please fork the repo and submit a pull request with your improvements.  

## License  
This project is licensed under the **MIT License**.  

