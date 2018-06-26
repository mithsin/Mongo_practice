pipeline {
    agent any
    stages {
        stage('test') {
            steps {
              bat 'node -v'
              bat 'npm install'
              bat 'npm run test'
            }
        }
    }
}
