pipeline {
    agent any
       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         sh 'node -v'
         sh 'npm install'
         sh 'npm run test'

       }
}
