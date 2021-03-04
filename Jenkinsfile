pipeline {
  agent any
  stages {
    stage('Setup env') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Commit') {
      steps {
        bat 'git add . && git commit -m \'Built and stuff\''
      }
    }

    stage('Annddd push') {
      steps {
        bat 'git push'
      }
    }

  }
}