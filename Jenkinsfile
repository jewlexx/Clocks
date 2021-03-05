pipeline {
  agent any
  stages {
    stage('Setup env') {
      steps {
        sh 'npm i && git remote set-url origin https://jamesinaxx:$PASSWORD@github.com/jamesinaxx/Clocks.git'
      }
    }

    stage('Build and deploy') {
      steps {
        sh 'npm run deploy'
      }
    }

  }
  environment {
    PASSWORD = '3d8392ef9164ecb615a227b47b386913ad137ea1'
  }
}