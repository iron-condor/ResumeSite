import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ExperienceEntryComponent, JobEntry } from "../experience-entry/experience-entry.component";

@Component({
  selector: 'app-experience-page',
  imports: [ExperienceEntryComponent],
  templateUrl: './experience-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
  rvtechLogoUrl = '/assets/rvtech-logo.png';
  swampfoxLogoUrl = '/assets/swampfox-logo.png';
  mlegLogoUrl = '/assets/mleg-logo.png'
  javaIcon = '/assets/icons/java.png';
  junitIcon = '/assets/icons/junit5.png';
  mockitoIcon = '/assets/icons/mockito.png';
  mavenIcon = '/assets/icons/maven.png';
  postgresIcon = '/assets/icons/postgres.png';
  jenkinsIcon = '/assets/icons/jenkins.png';
  rabbitmqIcon = '/assets/icons/rabbitmq.png';
  kafkaIcon = '/assets/icons/kafka.png';
  tomcatIcon = '/assets/icons/tomcat.png';
  linuxIcon = '/assets/icons/linux.png';
  restapiIcon = '/assets/icons/restapi.png';
  websocketIcon = '/assets/icons/websocket.png';
  sqlIcon = '/assets/icons/sql.png';
  smsIcon = '/assets/icons/sms.png';
  phoneIcon = '/assets/icons/phone.png';
  cplusplusIcon = '/assets/icons/cplusplus.png';
  pythonIcon = '/assets/icons/python.png';
  scikitLearnIcon = '/assets/icons/scikitlearn.png';
  numpyIcon = '/assets/icons/numpy.png';
  kerasIcon = '/assets/icons/keras.png';
  neuralNetworkIcon = '/assets/icons/neuralnetwork.png';
  dnaIcon = '/assets/icons/dna.png';
  kotlinIcon = '/assets/icons/kotlin.png';
  kubernetesIcon = '/assets/icons/kubernetes.png';
  dynamoDbIcon = '/assets/icons/dynamodb.png';
  lambdaIcon = '/assets/icons/lambda.png';
  microservicesIcon = '/assets/icons/microservices.png';
  natsIcon = '/assets/icons/nats.png';
  springIcon = '/assets/icons/spring.png';
  datadogIcon = '/assets/icons/datadog.png';
  nodeJsIcon = '/assets/icons/nodejs.png';

  protected jobs: JobEntry[] = [
    {
      companyName: "Rivian & Volkswagen Group Technologies",
      companyURL: "https://www.rivianvw.tech",
      logoURL: this.rvtechLogoUrl,
      logoHeight: 75,
      logoWidth: 75,
      positions: [
        { title: "Software Engineer II", start: new Date(2025, 4), end: undefined },
      ],
      responsibilities: [
        { segments: [{ text: "Architected and built high-volume systems using message brokers and Kubernetes with Kotlin on the AWS platform" }] },
        { segments: [{ text: "Directly responsible individual (DRI) for cloud integrations with eSIM component vendors" }] },
        { segments: [{ text: "Extended legacy serverless Node.js codebase to support new long-term business requirements" }] },
        { segments: [{ text: "Established and debugged factory software integrations for new production lines for the" }, { text: "Rivian R2.", url: "https://rivian.com/r2" }, { text: "Walked factory line to ground system design in real-life context" }] },
        { segments: [{ text: "Implemented eSIM protocols to create" }, { text: "one of the first connected cars to use SGP.32 eSIM technology", url: "https://riviantrackr.com/news/rivians-r2-will-be-among-the-first-vehicles-to-launch-with-next-gen-esim-technology" }] }
      ],
      technologies: [
        { title: "Kotlin", logoURL: this.kotlinIcon },
        { title: "Kubernetes", logoURL: this.kubernetesIcon },
        { title: "DynamoDB", logoURL: this.dynamoDbIcon },
        { title: "Lambda", logoURL: this.lambdaIcon },
        { title: "Microservices", logoURL: this.microservicesIcon },
        { title: "Kafka", logoURL: this.kafkaIcon },
        { title: "NATS", logoURL: this.natsIcon },
        { title: "Spring boot", logoURL: this.springIcon },
        { title: "Datadog", logoURL: this.datadogIcon },
        { title: "Node.js", logoURL: this.nodeJsIcon },
      ]
    },
    {
      companyName: "Swampfox Technologies Inc.",
      companyURL: "https://www.swampfoxinc.com",
      logoURL: this.swampfoxLogoUrl,
      positions: [
        { title: "Software Developer II", start: new Date(2024, 0), end: new Date(2025, 4) },
        { title: "Software Developer", start: new Date(2023, 4), end: new Date(2024, 0) },
        { title: "Product Development Intern", start: new Date(2022, 4), end: new Date(2023, 4) }
      ],
      responsibilities: [
        { segments: [{ text: "Developed and maintained telecom software that powers enterprise call centers using Java, SQL and CCXML/VXML" }] },
        { segments: [{ text: "Worked with other software developers, QA engineers and project managers on Scrum teams to iteratively add features and address defects in software" }] },
        { segments: [{ text: "Architected, developed and deployed distributed monitoring and reporting solutions using RabbitMQ and Postgres" }] },
        { segments: [{ text: "Served as technical lead/owner of mission critical software for high-availability systems" }] },
        { segments: [{ text: "Met with project managers, engineers and stakeholders from other companies to understand their needs and develop custom systems to integrate with their proprietary infrastructure" }] },
        { segments: [{ text: "Digested protocol specifications to create effective product integrations with existing protocols such as SMPP" }] },
        { segments: [{ text: "Triaged and debugged live issues for production call centers handling 3,000+ simultaneous calls during critical service interruptions" }] },
        { segments: [{ text: "Wrote documentation and automated tests using JUnit5 and Mockito to ensure maintainability" }] },
        { segments: [{ text: "Served as a mentor and a technical resource for interns during their projects" }] },
        { segments: [{ text: "Attended career fairs, reviewed technical assessments and interviewed interns for summer projects" }] }
      ],
      technologies: [
        { title: "Java", logoURL: this.javaIcon },
        { title: "JUnit5/Mockito", logoURL: this.junitIcon },
        // Combining JUNit5 and Mockito so that there are an even number of items
        // {title: "Mockito", logoURL: this.mockitoIcon},
        { title: "Maven", logoURL: this.mavenIcon },
        { title: "Apache Tomcat", logoURL: this.tomcatIcon },
        { title: "Postgres", logoURL: this.postgresIcon },
        { title: "Jenkins", logoURL: this.jenkinsIcon },
        { title: "RabbitMQ", logoURL: this.rabbitmqIcon },
        { title: "REST APIs", logoURL: this.restapiIcon },
        { title: "Websockets", logoURL: this.websocketIcon },
        { title: "Linux", logoURL: this.linuxIcon },
        { title: "SMS Systems", logoURL: this.smsIcon },
        { title: "Avaya telephony", logoURL: this.phoneIcon },
      ]
    },
    {
      companyName: "University of South Carolina",
      companyURL: "http://mleg.cse.sc.edu",
      logoURL: this.mlegLogoUrl,
      positions: [{ title: "Undergraduate Research Assistant", start: new Date(2019, 8), end: new Date(2020, 11) }],
      responsibilities: [
        { segments: [{ text: "Analyzed scientific problems to apply artificial intelligence and deep learning models" }] },
        { segments: [{ text: "Studied and implemented existing machine, deep learning, and evolutionary programming models within larger systems to find better systems for approximating thermal properties of hypothetical materials" }] },
        { segments: [{ text: "Rapidly learned new libraries and frameworks to implement them in more complex programs" }] },
        { segments: [{ text: "Generated and analyzed charts and statistics to find flaws and improvements with models" }] },
        { segments: [{ text: "Compared performance of statistical, neural network and genetic algorithm models against thermal conductivity data" }] },
        { segments: [{ text: "Wrote and contributed to research articles within the fields of Computer Science/Materials Design" }] },
        { segments: [{ text: "Preprocessed raw data and transformed it into a format interpretable by machine learning models" }] },
        { segments: [{ text: "Cooperated with a team of researchers and experts to further the field of materials design" }] }
      ],
      technologies: [
        { title: "Python", logoURL: this.pythonIcon },
        { title: "scikit-learn", logoURL: this.scikitLearnIcon },
        { title: "Numpy/Pandas", logoURL: this.numpyIcon },
        { title: "Keras/Tensorflow", logoURL: this.kerasIcon },
        { title: "Neural networks", logoURL: this.neuralNetworkIcon },
        { title: "Genetic algorithms", logoURL: this.dnaIcon },
      ]
    },
  ];

  openWebsite(website: string) {
    window.open(website);
  }
}