pipeline {
  agent any
  stages {
    stage('Setup env') {
      steps {
        bat 'npm i'
      }
    }

    stage('Build and deploy') {
      steps {
        sh 'npm run deploy'
      }
    }

  }
}