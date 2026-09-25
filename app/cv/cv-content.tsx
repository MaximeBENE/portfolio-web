"use client";

import React from "react";

export function CVContent() {
  const experiences = [
    {
      title: "DÉVELOPPEUR WEB — Sécurité applicative",
      company: "PitchTrack — Décembre 2025 à Mars 2026 — Freelance",
      tasks: [
        "Authentification sécurisée : Implémentation Google OAuth 2.0, gestion des sessions et contrôle des accès utilisateurs",
        "Protection des données : Sécurisation des échanges API Webflow/Wized/Xano, gestion des tokens et des droits",
        "Développement et optimisation d'application web, correction de bugs d'affichage et de logique métier",
        "Gestion des espaces utilisateurs, profils, dashboards et système de forfaits"
      ],
      bold: [0, 1]
    },
    {
      title: "DÉVELOPPEUR WEB FULLSTACK",
      company: "maximebene — Septembre 2024 à Septembre 2025 — Intérim",
      tasks: [
        "Sécurité back-end : Authentification JWT, protection contre les injections SQL et attaques XSS, validation des entrées",
        "Front-end React.js : interfaces avec tri, filtrage, panier, modification de profil",
        "Back-end Node.js : gestion des commandes, panel d'administration, gestion des rôles et permissions",
        "Déploiement : MongoDB/Render, Vercel, Google Cloud, versioning GitLab CI/CD"
      ],
      bold: [0, 2, 3]
    },
    {
      title: "CONCEPTEUR D'APPLICATION",
      company: "MCCLOYD — Février 2023 à Mai 2024 — Alternance — Paris",
      tasks: [
        "Développement d'une plateforme sportive complète (coachs et athlètes) avec dashboard de gestion",
        "Front-end React.js / Redux : interfaces dynamiques, visualisation de données",
        "Back-end Node.js / Express + PostgreSQL : gestion sécurisée des utilisateurs, requêtes optimisées"
      ],
      bold: [1, 2]
    },
  ];

  const projets = [
    {
      title: "NETWORK PACKET ANALYZER",
      context: "Projet portfolio — 2026 — Open source (GitHub)",
      tasks: [
        "Mini-IDS en Python (Scapy) : capture et analyse de trafic réseau .pcap/.pcapng",
        "Détection automatique de scans de ports (Nmap), brute-force (SSH, RDP, MySQL) et ARP Spoofing",
        "Distinction interne/externe (RFC1918), gradation de sévérité (MOYEN / ÉLEVÉ / CRITIQUE)",
        "Export JSON compatible SIEM (Wazuh, Elasticsearch), testé en lab Kali ↔ Ubuntu"
      ],
      bold: [0, 1, 2]
    },
    {
      title: "DÉTECTEUR ARP SPOOFING",
      context: "Extension du Network Analyzer — 2026 — Open source (GitHub)",
      tasks: [
        "Détection temps réel des attaques Man-in-the-Middle via surveillance ARP",
        "Alerte sur changement de MAC suspect, gradation CRITIQUE / ÉLEVÉ",
        "Test réel contre arpspoof dans un lab Kali + Ubuntu isolé"
      ],
      bold: [0, 1]
    },
  ];

  const formations = [
    { title: "CONCEPTEUR DÉVELOPPEUR D'APPLICATIONS", school: "ISCOD | Février 2023 à Mai 2024" },
    { title: "DÉVELOPPEUR WEB ET WEB MOBILE", school: "ADRAR FORMATION | Janvier 2021 à Septembre 2021" }
  ];

  const skillsData = {
    "Cybersécurité & Réseau": [
      { name: "OAuth 2.0 / JWT", level: 4 },
      { name: "Protection XSS / SQLi", level: 4 },
      { name: "OWASP Top 10", level: 3 },
      { name: "Gestion des accès & rôles", level: 4 },
      { name: "TCP/IP & Protocoles", level: 3 },
      { name: "Linux / Bash", level: 3 },
      { name: "Python (sécu / scripting)", level: 4 },
      { name: "Scapy (analyse réseau)", level: 3 },
      { name: "Wireshark", level: 3 },
      { name: "Nmap", level: 3 },
      { name: "ARP / MITM (détection)", level: 3 }
    ],
    "Dév. fullstack": [
      { name: "React / Redux", level: 5 },
      { name: "Node.js / Express", level: 5 },
      { name: "HTML5 / CSS3", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "React Native", level: 3 },
      { name: "Webflow / Wized", level: 4 }
    ],
    "BDD & Cloud": [
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "Google Cloud", level: 3 },
      { name: "AWS", level: 3 },
      { name: "Vercel / Render", level: 4 }
    ],
    "Gestion de projets": [
      { name: "Git / GitHub / GitLab", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "Agile / Scrum", level: 4 },
      { name: "Kanban", level: 4 },
      { name: "UML", level: 3 }
    ]
  };

  const green = '#39FF14';
  const black = '#111111';

  const styles = {
    container: {
      width: '100%',
      maxWidth: '210mm',
      minHeight: '297mm',
      backgroundColor: 'white',
      margin: '0 auto',
      fontFamily: "'Inter', Arial, -apple-system, sans-serif",
      fontSize: '11px',
      color: '#222'
    },
    header: {
      backgroundColor: black,
      color: 'white',
      padding: '8px 28px 8px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: '22px'
    },
    headerContent: { flex: 1 },
    nameLine: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '4px',
      flexWrap: 'wrap' as const
    },
    photoContainer: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid ' + green,
      flexShrink: 0,
      backgroundColor: '#222'
    },
    photoImg: { width: '100%', height: '100%', objectFit: 'cover' as const },
    name: {
      fontSize: '28px',
      fontWeight: '700',
      margin: 0,
      color: green,
      letterSpacing: '-0.3px'
    },
    subtitle: {
      fontSize: '12.5px',
      fontWeight: '400',
      marginTop: '3px',
      marginBottom: '8px',
      color: '#aaa',
      letterSpacing: '0.8px'
    },
    qualities: { display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' as const },
    quality: {
      backgroundColor: 'rgba(57,255,20,0.1)',
      border: '1px solid rgba(57,255,20,0.35)',
      color: green,
      padding: '3px 12px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: '500'
    },
    contactInfo: { display: 'flex', gap: '16px', flexWrap: 'wrap' as const, fontSize: '11.5px', color: '#aaa' },
    personalInfo: { marginTop: '4px', fontSize: '11px', color: '#666', margin: 0 },
    intro: { fontSize: '11px', color: '#aaa', marginTop: '6px', marginBottom: 0, lineHeight: '1.4' },
    poeBadge: {
      display: 'inline-block',
      backgroundColor: 'rgba(57,255,20,0.12)',
      border: '1px solid rgba(57,255,20,0.35)',
      color: green,
      padding: '3px 10px',
      borderRadius: '10px',
      fontSize: '10px',
      fontWeight: '600',
      whiteSpace: 'nowrap' as const
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1.85fr 1fr'
    },
    mainContent: { padding: '12px 24px 0' },
    sidebar: { backgroundColor: '#f5f5f5', padding: '12px 15px 0' },
    section: { marginBottom: '10px' },
    sectionTitle: {
      color: black,
      fontWeight: '700',
      fontSize: '12px',
      marginBottom: '8px',
      paddingBottom: '3px',
      borderBottom: '2px solid ' + green,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.2px'
    },
    experienceItem: { marginBottom: '10px' },
    jobTitle: { fontWeight: '700', fontSize: '12px', color: '#111' },
    companyInfo: { color: '#777', fontSize: '10.5px', marginBottom: '4px', marginTop: '1px', fontStyle: 'italic' as const },
    task: { color: '#444', fontSize: '10.5px', marginBottom: '2px', lineHeight: '1.4', margin: '0 0 2px 0' },
    taskBold: { fontWeight: '700', color: '#222' },
    formationTitle: { fontWeight: '700', fontSize: '11.5px', color: '#111' },
    formationSchool: { color: '#777', fontSize: '10.5px', marginTop: '2px', fontStyle: 'italic' as const },
    skillsCategory: { marginBottom: '10px' },
    categoryTitle: {
      color: black,
      fontWeight: '700',
      fontSize: '10px',
      marginBottom: '5px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.4px'
    },
    skillsList: { display: 'flex', flexDirection: 'column' as const, gap: '4px' },
    skillItem: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' },
    skillName: { fontSize: '10.5px', color: '#333', fontWeight: '500', minWidth: '80px' },
    stars: { display: 'flex', gap: '2px', fontSize: '11px' },
    starFilled: { color: green },
    starEmpty: { color: '#ccc' }
  };

  const Stars = ({ level }: { level: number }) => (
    <div style={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={i <= level ? styles.starFilled : styles.starEmpty}>&#9733;</span>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.nameLine}>
            <h1 style={styles.name}>Maxime BENE</h1>
            <span style={styles.poeBadge}>Dispositif POE — France Travail</span>
          </div>
          <h2 style={styles.subtitle}>Développeur Fullstack | Reconversion Cybersécurité — SOC N1 / DevSecOps</h2>
          <div style={styles.qualities}>
            {['Autonome', 'Curieux', 'Persévérant', 'Rigoureux'].map(q => (
              <span key={q} style={styles.quality}>{q}</span>
            ))}
          </div>
          <div style={styles.contactInfo}>
            <span>bene.max31@gmail.com</span>
            <span>06.66.39.37.48</span>
            <span>75017 Paris, France</span>
            <span>30 ans — Permis de conduire</span>
          </div>
          <p style={styles.personalInfo}>
            <a href="https://www.maximebene.com/" target="_blank" rel="noopener noreferrer"
              style={{ color: green, textDecoration: 'none', fontWeight: '600', fontSize: '11px' }}>
              portfolio : maximebene.com
            </a>
          </p>
          <p style={styles.intro}>
            Développeur fullstack (React, Node.js, PostgreSQL) en reconversion vers la cybersécurité.
            Sensibilisé à la sécurité applicative : OAuth 2.0, protection XSS/injections SQL, gestion des accès et des rôles.
            Développe des outils Python d&apos;analyse réseau (Scapy, Wireshark) : mini-IDS détectant scans de ports, brute-force et ARP Spoofing, testés dans un lab Kali + Ubuntu isolé.
            Je cherche à appliquer mes compétences techniques au sein d&apos;une équipe SOC N1 ou DevSecOps.
          </p>
        </div>
        <div style={styles.photoContainer}>
          <img src="/maxime.jpg" alt="Photo Maxime BENE" style={styles.photoImg} />
        </div>
      </div>

      {/* Body */}
      <div style={styles.content}>
        {/* Main */}
        <div style={styles.mainContent}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Expériences professionnelles</h3>
            {experiences.map((exp, i) => (
              <div key={i} style={styles.experienceItem}>
                <div style={styles.jobTitle}>{exp.title}</div>
                <div style={styles.companyInfo}>{exp.company}</div>
                {exp.tasks.map((task, j) => (
                  <p key={j} style={styles.task}>
                    <span style={exp.bold?.includes(j) ? styles.taskBold : {}}>•</span> {task}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Projets personnels</h3>
            {projets.map((proj, i) => (
              <div key={i} style={styles.experienceItem}>
                <div style={styles.jobTitle}>{proj.title}</div>
                <div style={styles.companyInfo}>{proj.context}</div>
                {proj.tasks.map((task, j) => (
                  <p key={j} style={styles.task}>
                    <span style={proj.bold?.includes(j) ? styles.taskBold : {}}>•</span> {task}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Formations</h3>
            {formations.map((f, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                <div style={styles.formationTitle}>{f.title}</div>
                <div style={styles.formationSchool}>{f.school}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={styles.sectionTitle}>Compétences</h3>
          {Object.entries(skillsData).map(([cat, skills]) => (
            <div key={cat} style={styles.skillsCategory}>
              <h4 style={styles.categoryTitle}>{cat}</h4>
              <div style={styles.skillsList}>
                {skills.map(s => (
                  <div key={s.name} style={styles.skillItem}>
                    <span style={styles.skillName}>{s.name}</span>
                    <Stars level={s.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: '12px' }}>
            <h3 style={styles.sectionTitle}>Langues</h3>
            <div style={styles.skillItem}>
              <span style={styles.skillName}>Anglais</span>
              <Stars level={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}