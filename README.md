comandos para correr:

npm create vite@latest

npm install --save-dev eslint-config-react-app eslint@^8.0.0 eslint-plugin-html prettier @babel/plugin-proposal-private-property-in-object 
    https://stackoverflow.com/questions/69842785/how-can-i-intregate-eslint-in-a-vitereact-project
        Agregar a el .eslintrc.json: "extends": [ "react-app" ],  "plugins": [ "html" ]

npm add -D sass

optional: npm install --save-dev eslint-plugin-hexagonal-architecture
    https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture

deploy a vite app: https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf