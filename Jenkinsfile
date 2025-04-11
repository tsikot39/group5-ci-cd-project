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
    stage('Push to ECR') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'aws-creds', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
          sh '''
            aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
            aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
            aws configure set default.region us-east-1

            aws ecr get-login-password | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.us-east-1.amazonaws.com
            docker tag your-ecr-repo-name:latest <aws_account_id>.dkr.ecr.us-east-1.amazonaws.com/your-ecr-repo-name:latest
            docker push 945411826430.dkr.ecr.us-east-2.amazonaws.com/ci-cd-react-app:latest
          '''
        }
      }
    }

  }
}
