import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgOptimizedImage } from '@angular/common';
import { linkedInURL } from '../app.config';
import { FileService } from '../file.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [NgbModule, NavBarComponent, NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private fileService: FileService) {}
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
  handshakeIcon = '/assets/icons/handshake.png'
  restapiIcon = '/assets/icons/restapi.png'
  websocketIcon = '/assets/icons/websocket.png'
  scrumIcon = '/assets/icons/scrum.png'
  sqlIcon = '/assets/icons/sql.png'
  smsIcon = '/assets/icons/sms.png'
  phoneIcon = '/assets/icons/phone.png'
  cplusplusIcon = '/assets/icons/cplusplus.png'
  jiraIcon = '/assets/icons/jira.png'

  linkedInURL = linkedInURL;

  downloadResume() {
    const url = '/assets/resume.pdf';
    this.fileService.downloadFile(url).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'chris-loftis-resume.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
