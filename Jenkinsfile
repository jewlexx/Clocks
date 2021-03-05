pipeline {
  agent any
  stages {
    stage('Setup env') {
      steps {
        bat 'npm i && git remote set-url origin https://github.com/jamesinaxx/Clocks.git'
      }
    }

    stage('Build and deploy') {
      steps {
        bat 'npm run deploy:batch'
      }
    }

  }
  environment {
    PASSWORD = 'Jamesis7*'
  }
}