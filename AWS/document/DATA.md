### mongoDB

# Vuex

|date|editor|desc|
|---|---|---|
|21-07-05|김지환|초안 |
|21-07-07|백엔드 작성| |

### mainInfo.js
- state
  - robot_idx (Number)
  - robots [object]
    - id (String)
    - modules (Array)
        - id (String)
        - contents (Object)
        - clickable [Boolean]

### userInfo.js
- state
  - host (String)
  - accessToken (String)
  - user_email (String)
  - robots [object]
    - id : String
    - modules : [obejct]
      - id :(String)
      - type :(String)
      - content :(object)
        - ...
