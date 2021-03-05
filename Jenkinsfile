pipeline {
  agent any

  tools {nodejs "nodejs"}

  stages {
    stage('Setup env') {
      steps {
        bat 'npm i'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
  }
}