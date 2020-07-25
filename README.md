# Automation

Dieses Projekt stellt eine automatische Testdurchführung für API und UI dar. Die Testdurchführung basiert auf das NodeJS, Protactor, und Postman/Newman.

# Inhalt

* Folder "test-api": beinhaltet die Testfälle für API.
* Folder "test-ui": beinhaltet die Testfälle für UI.
* Datei "[package.json](https://github.com/samerhijazi/automation/blob/master/package.json)": beinhaltet die Konfiguration des gesamten Projektes.
* Datei "Dockerfile": beinhaltet die Beschreibung für die Verwendung in Docker-Container bzw. CI-CD. !!!!NOCH IN ARBEIT!!!

# Durchführung

Um die automatisierten Tests durchzuführen ist es erfolderlich, das NodeJS-Framework (ab Version 10.15.3) lokal auf dem Rechner zu installieren. Dies kann man aus der folgende Seite (<https://nodejs.org/en/download/>) runtergeladen und installieren werden.

Das Projekt kann mit dem folgenden Befehl runterladen werden:

```
git clone https://github.com/samerhijazi/automation.git
```

Die Testdurchführung für API und UI kann mit dem folgenden Befehl gestartet werden:

```
npm run test-all:local
```
