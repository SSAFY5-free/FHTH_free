# FHTH_free

## INSTALL & START
    cd backend_rpi
    npm install
    npm start
  
## TEST
* POSTMAN
```  
POST http://localhost/test/1  
Headers["x-access-key] = 로그인 시 발급받는 key
```

## ISSUE
    AWS backend와 통신은 되는데 x-access-key를 axios를 통해 보내는 부분에서 안 넘어감
        
