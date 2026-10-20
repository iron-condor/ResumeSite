import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';
import { linkedInURL } from '../app.constants';
import { FileService } from '../file.service';
import { ThemeToggleService } from '../theme-toggle.service';

@Component({
  selector: 'home-page',
  imports: [NgbModule, NgOptimizedImage],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private fileService: FileService, private themeService: ThemeToggleService) { }

  pfpUrl = '/assets/pfp.jpg';
  goldenGateUrl = '/assets/golden_gate.png'
  bayBridgeUrl = '/assets/bay_bridge.png'

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
  kotlinIcon = '/assets/icons/kotlin.png'
  kubernetesIcon = '/assets/icons/kubernetes.png'
  dynamoDbIcon = '/assets/icons/dynamodb.png'
  lambdaIcon = '/assets/icons/lambda.png'
  microservicesIcon = '/assets/icons/microservices.png'
  springIcon = '/assets/icons/spring.png'
  datadogIcon = '/assets/icons/datadog.png'
  nodeJsIcon = '/assets/icons/nodejs.png'

  linkedInURL = linkedInURL;

  NUM_FOG_CLOUDS = 40
  NUM_VERTICAL_CABLES = 33

  cableData = [
    { height: 15, topMargin: 105, leftMargin: 3 },
    { height: 23, topMargin: 100, leftMargin: 11.7 },
    { height: 35, topMargin: 93, leftMargin: 11.8 },
    { height: 40, topMargin: 84, leftMargin: 11.4 },
    { height: 49, topMargin: 73, leftMargin: 10.5 },
    { height: 57, topMargin: 64, leftMargin: 9 },
    { height: 72, topMargin: 53, leftMargin: 8.5 },
    { height: 72, topMargin: 53, leftMargin: 49.1 },
    { height: 57, topMargin: 65, leftMargin: 11 },
    { height: 49, topMargin: 77, leftMargin: 11.7 },
    { height: 37, topMargin: 88, leftMargin: 11 },
    { height: 29, topMargin: 95, leftMargin: 11.4 },
    { height: 19, topMargin: 103, leftMargin: 11.6 },
    { height: 15, topMargin: 107, leftMargin: 11.6 },
    { height: 7, topMargin: 113, leftMargin: 11.3 },
    { height: 5, topMargin: 113, leftMargin: 11 },
    { height: 5, topMargin: 114, leftMargin: 12.5 },
    { height: 5, topMargin: 113, leftMargin: 11.9 },
    { height: 9, topMargin: 111, leftMargin: 12.3 },
    { height: 15, topMargin: 107, leftMargin: 12 },
    { height: 19, topMargin: 101, leftMargin: 11.4 },
    { height: 29, topMargin: 95, leftMargin: 11.3 },
    { height: 37, topMargin: 87, leftMargin: 11.3 },
    { height: 49, topMargin: 77, leftMargin: 11 },
    { height: 57, topMargin: 65, leftMargin: 11 },
    { height: 72, topMargin: 51, leftMargin: 10.5 },
    { height: 72, topMargin: 51, leftMargin: 49 },
    { height: 57, topMargin: 65, leftMargin: 10.2 },
    { height: 49, topMargin: 77, leftMargin: 10.8 },
    { height: 37, topMargin: 87, leftMargin: 11.4 },
    { height: 29, topMargin: 95, leftMargin: 10.8 },
    { height: 19, topMargin: 101, leftMargin: 11.4 },
    { height: 15, topMargin: 107, leftMargin: 11 },
  ]

  // Render the light pulsing at different phases to more closely resemble the bay lights
  cableLightDurations = this.cableData.map(() => ({
    duration: `${(Math.random() * 3 + 5).toFixed(2)}s` // Random between 1s and 3s
  }));

  fogLayers = Array.from({ length: this.NUM_FOG_CLOUDS }, (_, i) => ({
    left: `-${Math.floor(Math.random() * 300) + 100}px`,
    top: `${Math.floor(Math.random() * 140) + 10}px`,
    duration: `${Math.floor(Math.random() * 20) + 50}s`,
    delay: `-${Math.floor(Math.random() * 30)}s`,
    scale: (Math.random() * 0.5 + 0.5).toFixed(2),
    // Half of the clouds should be in the foreground (and more opaque),
    // half should be in the background (and less opaque)
    opacity: i <= (this.NUM_FOG_CLOUDS / 2) ? 0.5 : 0.9,
    zIndex: i <= (this.NUM_FOG_CLOUDS / 2) ? 6 : 11,
  }));

  lights = Array(this.NUM_VERTICAL_CABLES).fill(null);

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

  currentTheme(): string {
    return this.themeService.currentTheme;
  }
}
