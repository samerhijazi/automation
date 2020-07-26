# Automation

Dieses Projekt stellt eine automatische Testdurchführung für API und UI dar. Die Testdurchführung basiert auf das NodeJS, Protactor, und Postman/Newman.

# Inhalt

* Folder "test-api": beinhaltet die Testfälle für API.
* Folder "test-ui": beinhaltet die Testfälle für UI.
* Datei "[package.json](https://github.com/samerhijazi/automation/blob/master/package.json)": beinhaltet die Konfiguration des gesamten Projektes.
* Datei "Dockerfile": beinhaltet die Beschreibung für die Verwendung in Docker-Container bzw. CI-CD. !!!!NOCH IN ARBEIT!!!

# Durchführung

Um die automatisierten Tests durchzuführen ist es erfolderlich, das NodeJS-Framework (ab Version 10.15.3) und Google Chrome lokal auf dem Rechner zu installieren. Das NodeJS kann man aus der folgende Seite (<https://nodejs.org/en/download/>) runterladen und dann installieren.

Das Projekt kann man mit dem folgenden Befehl runterladen:

```
git clone https://github.com/samerhijazi/automation.git
```

Die Testdurchführung für API und UI kann man mit dem folgenden Befehl starten:

```
npm run test-all:local
```
