import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgOptimizedImage } from '@angular/common';
import { linkedInURL } from '../app.config';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [NgbModule, NavBarComponent, NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  pfpUrl = '/assets/pfp.jpg';

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

  linkedInURL = linkedInURL;
}
