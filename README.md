app 
1. development 
    - one class, one file
    
2. testing build
    sencha app build -c testing
    build/testing/myapp
    
    - 모든 클래스를 app.js
    - app.js클래스 내부의 소스를 읽을수 있다
    
3. production build
    sencha app build
    build/production/myapp
    
    - 모든 클래스를 app.js
    - app.js내부 소스를 읽을수 없다
    