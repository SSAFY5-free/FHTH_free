# 기술 스택
 - nodejs
 - mongoDB

# Run
```
1. cd /FHTH_FREE/AWS/backend </br>
2. nodemon
```

# Directory
```/
├── /unauth
│   ├── /addAccount => {result : 0 / 1}
│   ├── /getAccessToken => {accessToken : accessToken / ""}
│   ├── /getDevices => {data : [type]}
│   ├── /verifyRegistedDevice => {result : 0 / 1}
│   └── ~~ /verifyEmail ~~
├── /auth
│   ├── ~~ /setAccount ~~
│   ├── ~~ /setRegistedDeviceStatus ~~
│   └── /mainInfo [{serial, type, status = {}}]
``` 

