# Automation

# Prerequisites
- node -v (v10.15.3)
- npm -v (6.4.1)

-Dokcer: https://docs.docker.com/engine/install/
-Node.JS: https://nodejs.org/en/download/

# Unter Linux
- docker run -v "$PWD":/sogeti -w /sogeti node:alpine3.10 npm install
- docker run -v "$PWD":/sogeti -w /sogeti node:alpine3.10 npm run driver-status
- docker run -v "$PWD":/sogeti -w /sogeti node:alpine3.10 npm run test-ui

- docker run -v "$PWD":/sogeti -w /sogeti node:alpine3.10 sh -c 'npm install && npm run driver-status'
- docker run -v "$PWD":/sogeti -w /sogeti node:alpine3.10 bash -c 'npm install && npm run driver-status'

# Unter Windows
- docker run -v "%cd%":/sogeti -w /sogeti node:alpine3.10 npm iinstall
- docker run -v "$PWD":/sogeti -w /sogeti ubuntu bash