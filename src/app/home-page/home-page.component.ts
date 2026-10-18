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
  natsIcon = '/assets/icons/nats.png'
  springIcon = '/assets/icons/spring.png'
  datadogIcon = '/assets/icons/datadog.png'
  nodeJsIcon = '/assets/icons/nodejs.png'

  linkedInURL = linkedInURL;

  NUM_FOG_CLOUDS = 40

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
