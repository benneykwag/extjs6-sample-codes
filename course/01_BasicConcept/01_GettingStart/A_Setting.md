ExtJS 환경 설정.

1. Sencha Command 설치.
    https://www.sencha.com/products/sencha-cmd/
    - 설치 확인 : sencha

2. Sdk 다운로드
    http://support.sencha.com 에서 최신 버전 다운로드 후 압축을 해제.
    
    파일 : c:\sencha-lecture
                - sdk 
                    + ext-6.5.3
                - workspace                

3. Workspace 생성.
    워크스페이스란? 하나의 ExtJS SDK를 여러개의 앱이 공유해서 사용.
    workspace 
        workspace.json
        - ext (sdk)
        - app1 
        - com
        - myskeleton
        packages

    com
        - ext
        - javascript
        - packages
        
    워크스페이스로 사용할 폴더를 지정하고 해당 폴더 내부에서 cmd를 실행하고 아래 명령을 수행한다.
    cd workspace 
        sencha generate workspace ./

4. 샘플용 애플리케이션 생성
    - 워크스페이스 내부에서 아래 명령을 수행하여 classic용 앱을 생성한다.
    - 2에서 다운로드하고 압축해제한 sdk폴더 위치를 지정해야한다.
    sencha -sdk "sdk폴더 지정" generate app classic cla ./ClassApp

    - 앱 생성과정에서 워크스페이스 내부에 ext폴더를 생성한다. 이 폴더는 위에서 지정한
    sdk패스 상에서 필요한 파일만 카피해 온다.

5. 샘플용 애플리케이션 실행..
    cd MyApp
        sencha app watch

6. 샘플 프로그램 다운로드.
https://github.com/benneykwag/extjs6-sample-codes

7. course/
    01_BasicConcept/
        01_GettingStart/
            02_index.html
            

8. sencha 관련 용어.
    - sdk : extjs의 버전(개발시 필요한 코어 라이브러리제공)
        - ext-4
        - ext-5
        - ext-6
    - app : 앱 또는 애플리케이션 (여러 클래스 파일이 모여 애플리케이션 형태로 동작, 개발)
        - sencha command에 의해 생성된다.
        - sencha command에 의해 빌드된다.
        - 여러개의 클래스들이 모여 애플리케이션이 된다.
        - 로그인, 메뉴, 여러 프로그램. 
        - 하나의 sdk를 소유한다.(app내부에 ext폴더를 가진다.)          
    - workspace : 여러개의 app이 하나의 sdk를 공유해서 사용할 수 있다.
        - app1(인사모듈)
        - app2(재무모듈)
        - app3(스켈레톤(메뉴구조를 포함한 뼈대))
        - ext(ext-6.5.3)
        - app4(6.5.4)
        - ext654
            
        