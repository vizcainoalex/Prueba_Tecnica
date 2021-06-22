pipeline{
    agent any
    stages{
        stage('Checkout') {
            steps {
              git 'https://github.com/vizcainoalex/Prueba_Tecnica'
                //checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'e49daa75-9d6a-4f7b-8ccc-d85288708053', url: 'https://gitlab.com/avizcain0/Prueba_Tecnica.git']]])
            }
        }
        
        stage('Compile ..') {
          
            def mvn_version = 'maven_3_8_1'
                withEnv( ["PATH+MAVEN=${tool mvn_version}/bin"] ) {
                  sh "mvn clean package"
                }
        }
        stage('Build'){
            steps{
                echo 'Building..'
            }
        }
        
        stage('Test'){
            steps{
                echo 'Testing..'
            }
        }

        stage('Deploy'){
            steps{
                echo 'deploying..'
            }
        }
    }
}
