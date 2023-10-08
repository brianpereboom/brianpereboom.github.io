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
                // Check if a test script exists in package.json before running tests
                script {
                    def hasTestScript = sh(script: 'find . -type f -name "*test*" -exec npm run {} \;', returnStatus: true)
                    if (hasTestScript == 0) {
                        echo "No test script found in package.json. Skipping tests."
                    } else {
                        sh 'npm install' // Install project dependencies
                        sh 'npm test'    // Run tests using Jest or your preferred testing framework
                    }
                }
            }
            post {
                success {
                    // Additional actions to perform if tests pass
                    echo "Tests passed!"
                }
                failure {
                    // Additional actions to perform if tests fail
                    echo "Tests failed!"
                    // currentBuild.result = 'FAILURE'
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
