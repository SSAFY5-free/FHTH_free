# Frontend
/App
├── /Login
├── /Signup
│   └── /addRobot
│
└── /Main
│   ├── **SideBar**
│   ├── **Modules**
│   ├──     └──**Modal**
│   └── **NavBar**

# Backend
/route/index
├── /unauth
│   ├── /addAccount => {result : 0 / 1}
│   ├── /getAccessToken => {accessToken : accessToken / ""}
│   ├── /verifyRobot => {result : 0 / 1}
├── /auth
│   ├── /getRobots {} => {robots}
│   ├── /getModules {robot_id} => {registedModule} 
│   └── ~~/mainInfo [{serial, type, status = {}}]~~
├── /admin
│   ├── /addModuleType {result : 1}
│   ├── /addRegistedModule {result : 1}
│   ├── /addAccount {result : 1}
│   └── /addRobots {result : 1}
