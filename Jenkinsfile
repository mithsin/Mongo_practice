pipeline {
    agent any
       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         bat 'node -v'
         bat 'npm install'
         bat 'npm run test'

       }
}
