"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Database, Users } from "lucide-react";

const devSkills = [
  { name: "React / Redux", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "HTML5 / CSS3", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "Python", level: 60 },
  { name: "Webflow / Wized", level: 70 },
];

const cyberSkills = [
  { name: "OAuth 2.0 / JWT", level: 75 },
  { name: "Protection XSS / SQLi", level: 75 },
  { name: "Gestion des accès & rôles", level: 80 },
  { name: "GitLab CI/CD", level: 70 },
  { name: "Linux / Bash", level: 55 },
  { name: "Wireshark", level: 35 },
  { name: "Nmap", level: 35 },
  { name: "Scapy (analyse réseau)", level: 35 },
];

const dbCloudSkills = [
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Vercel / Render", level: 80 },
  { name: "Google Cloud", level: 55 },
  { name: "AWS", level: 50 },
  { name: "Docker", level: 40 },
];

const tools = [
  "Wireshark",
  "Nmap",
  "Scapy",
  "Burp Suite",
  "Kali Linux",
  "Ubuntu Server",
  "VirtualBox",
  "VS Code",
  "Git / GitHub",
  "GitLab CI/CD",
  "Docker",
  "Postman",
  "Figma",
  "Notion",
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
}

function SkillColumn({
  title,
  icon,
  iconColor,
  iconBg,
  skills,
  barColor,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  skills: { name: string; level: number }[];
  barColor: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col gap-5">
        {skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={barColor}
            delay={i * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Compétences</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Une double compétence : le code et la sécurité.
          </p>
        </motion.div>

        {/* 3 colonnes : Dev / Cyber / BDD-Cloud */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <SkillColumn
            title="Développement"
            icon={<Code2 className="h-5 w-5" />}
            iconBg="bg-blue-500/10"
            iconColor="text-blue-500"
            barColor="bg-blue-500"
            skills={devSkills}
          />

          <SkillColumn
            title="Cybersécurité & Réseau"
            icon={<Shield className="h-5 w-5" />}
            iconBg="bg-red-500/10"
            iconColor="text-red-500"
            barColor="bg-red-500"
            skills={cyberSkills}
            delay={0.1}
          />

          <SkillColumn
            title="BDD & Cloud"
            icon={<Database className="h-5 w-5" />}
            iconBg="bg-emerald-500/10"
            iconColor="text-emerald-500"
            barColor="bg-emerald-500"
            skills={dbCloudSkills}
            delay={0.2}
          />
        </div>

        {/* Outils */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Outils & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}