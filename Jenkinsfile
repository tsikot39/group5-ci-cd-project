pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("945411826430.dkr.ecr.us-east-2.amazonaws.com/ci-cd-react-app")
        }
      }
    }
  }
}
