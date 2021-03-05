pipeline {
  agent any

  stages {
    stage('Setup env') {
      steps {
        sh '''#!/bin/bash
echo $PATH
nvm -v
nvm use stable
npm -v
node -v
npm i && git remote set-url origin https://jamesinaxx:$PASSWORD@github.com/jamesinaxx/Clocks.git'''
      }
    }

    stage('Build and deploy') {
      steps {
        sh '''#!/bin/bash
echo $PATH
npm run deploy'''
      }
    }

  }
  environment {
    PASSWORD = '3d8392ef9164ecb615a227b47b386913ad137ea1'
  }
}