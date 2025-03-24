import { NgForOf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceEntryComponent, JobEntry } from "../experience-entry/experience-entry.component";

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [NgOptimizedImage, ExperienceEntryComponent, NgForOf],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
  swampfoxLogoUrl = '/assets/swampfox-logo.png';
  mlegLogoUrl = '/assets/mleg-logo.png'
  javaIcon = '/assets/icons/java.png';
  junitIcon = '/assets/icons/junit5.png';
  mockitoIcon = '/assets/icons/mockito.png';
  mavenIcon = '/assets/icons/maven.png';
  postgresIcon = '/assets/icons/postgres.png';
  jenkinsIcon = '/assets/icons/jenkins.png';
  rabbitmqIcon = '/assets/icons/rabbitmq.png';
  kafkaIcon = '/assets/icons/kafka.png'
  tomcatIcon = '/assets/icons/tomcat.png'
  linuxIcon = '/assets/icons/linux.png'
  restapiIcon = '/assets/icons/restapi.png'
  websocketIcon = '/assets/icons/websocket.png'
  sqlIcon = '/assets/icons/sql.png'
  smsIcon = '/assets/icons/sms.png'
  phoneIcon = '/assets/icons/phone.png'
  cplusplusIcon = '/assets/icons/cplusplus.png'
  pythonIcon = '/assets/icons/python.png'
  scikitLearnIcon = '/assets/icons/scikitlearn.png'
  numpyIcon = '/assets/icons/numpy.png'
  kerasIcon = '/assets/icons/keras.png'
  neuralNetworkIcon = '/assets/icons/neuralnetwork.png'
  dnaIcon = '/assets/icons/dna.png'

  protected jobs: JobEntry[] = [
    {
      companyName: "Swampfox Technologies Inc.",
      companyURL: "https://www.swampfoxinc.com",
      duration: "3 years",
      latestPositionName: "Senior Software Developer",
      logoURL: this.swampfoxLogoUrl,
      positions: [
        {title: "Senior Software Developer", start: "Jan 2024", end: "Present"},
        {title: "Software Developer", start: "May 2023", end: "Jan 2024"},
        {title: "Product Development Intern", start: "May 2022", end: "May 2023"}
      ],
      responsibilities: [
        "Developed and maintained telecom software that powers enterprise call centers using Java, SQL and CCXML/VXML",
        "Worked with other software developers, QA engineers and project managers on Scrum teams to iteratively add features and address defects in software",
        "Architected, developed and deployed distributed monitoring and reporting solutions using RabbitMQ and Postgres",
        "Served as technical lead/owner of mission critical software for high-availability systems",
        "Met with project managers, engineers and stakeholders from other companies to understand their needs and develop custom systems to integrate with their proprietary infrastructure",
        "Digested protocol specifications to create effective product integrations with existing protocols such as SMPP",
        "Triaged and debugged live issues with high-volume production call centers during emergencies",
        "Wrote documentation and automated tests using JUnit5 and Mockito to ensure maintainability",
        "Served as a mentor and a technical resource for interns during their projects",
        "Attended career fairs, reviewed technical assessments and interviewed interns for summer projects"
      ],
      technologies: [
        {title: "Java", logoURL: this.javaIcon},
        {title: "JUnit5/Mockito", logoURL: this.junitIcon},
        // Combining JUNit5 and Mockito so that there are an even number of items
        // {title: "Mockito", logoURL: this.mockitoIcon},
        {title: "Maven", logoURL: this.mavenIcon},
        {title: "Apache Tomcat", logoURL: this.tomcatIcon},
        {title: "Postgres", logoURL: this.postgresIcon},
        {title: "Jenkins", logoURL: this.jenkinsIcon},
        {title: "RabbitMQ", logoURL: this.rabbitmqIcon},
        {title: "REST APIs", logoURL: this.restapiIcon},
        {title: "Websockets", logoURL: this.websocketIcon},
        {title: "Linux", logoURL: this.linuxIcon},
        {title: "SMS Systems", logoURL: this.smsIcon},
        {title: "Avaya telephony", logoURL: this.phoneIcon},
      ]
    },
    {
      companyName: "University of South Carolina",
      companyURL: "http://mleg.cse.sc.edu",
      duration: "1.5 years",
      logoURL: this.mlegLogoUrl,
      latestPositionName: "Undergraduate Research Assistant",
      positions: [{title: "Undergraduate Research Assistant", start: "Sep 2019", end: "Dec 2020"}],
      responsibilities: [
        "Analyzed scientific problems to apply artificial intelligence and deep learning models",
        "Studied and implemented existing machine, deep learning, and evolutionary programming models within larger systems to find better systems for approximating thermal properties of hypothetical materials",
        "Rapidly learned new libraries and frameworks to implement them in more complex programs",
        "Generated and analyzed charts and statistics to find flaws and improvements with models",
        "Compared performance of statistical, neural network and genetic algorithm models against thermal conductivity data",
        "Wrote and contributed to research articles within the fields of Computer Science/Materials Design",
        "Preprocessed raw data and transformed it into a format interpretable by machine learning models",
        "Cooperated with a team of researchers and experts to further the field of materials design"
      ],
      technologies: [
        {title: "Python", logoURL: this.pythonIcon},
        {title: "scikit-learn", logoURL: this.scikitLearnIcon},
        {title: "Numpy/Pandas", logoURL: this.numpyIcon},
        {title: "Keras/Tensorflow", logoURL: this.kerasIcon},
        {title: "Neural networks", logoURL: this.neuralNetworkIcon},
        {title: "Genetic algorithms", logoURL: this.dnaIcon},
      ]
    },
  ];

  openWebsite(website: string) {
    window.open(website);
  }
}