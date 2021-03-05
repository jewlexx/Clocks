pipeline {
  agent any

  tools {nodejs "Latest NodeJS"}

  stages {
    stage('Setup env') {
      steps {
        sh '''#!/bin/bash
echo $PATH
npm -v
node -v
npm i'''
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
}