pipeline {
  // Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  // Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
 	  disableConcurrentBuilds()
  }

  // Aquí comienzan los “items” del Pipeline
  stages{
    stage('Checkout'){
    	steps{
            echo "------------>Checkout<------------"
            checkout([
                $class: 'GitSCM',
                branches: [[name: '*/master']],
                doGenerateSubmoduleConfigurations: false,
                extensions: [],
                gitTool: 'Default',
                submoduleCfg: [],
                userRemoteConfigs: [[
                    credentialsId: 'GitHub_diegopovalz',
				            url:'https://github.com/diegopovalz/ReservaPeliculasFront.git'
                ]]
            ])
        }
    }

    stage('Install node modules') {
      steps{
        echo "------------>Installing<------------"
        sh 'npm install'
      }
    }

    /*stage('Lint test') {
      steps{
        echo "------------>Lint Analysis<------------"
        sh 'npm run lint'
      }
    }*/

    stage('Code Coverage Tests') {
      steps{
        echo "------------>Code Testing<------------"
        sh 'npm run test'
      }
    }

    stage('E2E Tests') {
      steps{
        echo "------------>E2E Testing<------------"
        sh 'npm run e2e'
      }
    }

    stage('Static Code Analysis') {
      steps{
        echo '------------>Static Code Analysis<------------'
        withSonarQubeEnv('Sonar') {
            sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
        }
      }
    }

    stage('Build') {
      steps{
        echo "------------>Building<------------"
        sh 'npm run build'
      }
    }

  }

  post {
    failure {
      mail (to: 'diego.poveda@ceiba.com.co', subject: "Failed Pipeline: ${currentBuild.fullDisplayName}", body: "Something is wrong with ${env.BUILD_URL}")
    }
  }
}
