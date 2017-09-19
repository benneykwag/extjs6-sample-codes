ExtJS 환경 설정.

1. Sencha Command 설치.
    https://www.sencha.com/products/sencha-cmd/

2. Sdk 다운로드
    http://support.sencha.com 에서 최신 버전 다운로드 후 압축을 해제.

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
    cd extjs6-sample-codes 
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
            
