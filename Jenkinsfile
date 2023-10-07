pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/brianpereboom/brianpereboom.github.io.git']]])
            }
        }
        stage('Test') {
            steps {
                // Install dependencies and run tests (example with JavaScript and Jest)
                sh 'npm install' // Install project dependencies
                sh 'npm test'    // Run tests using Jest or your preferred testing framework
            }
            post {
                success {
                    // Additional actions to perform if tests pass
                    echo "Tests passed!"
                }
                failure {
                    currentBuild.result = 'FAILURE'
                    // Additional actions to perform if tests fail
                    echo "Tests failed!"
                }
            }
        }
    }
    post {
        success {
            // Trigger additional actions on success, if needed
            echo "Post was successful!"
        }
        failure {
            // Trigger additional actions on failure, if needed
            echo "Post failed!"
        }
    }
}
