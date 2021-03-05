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
    PASSWORD = '0363cdcc94560dda948da8dc3130695c7773dd1b'
  }
}