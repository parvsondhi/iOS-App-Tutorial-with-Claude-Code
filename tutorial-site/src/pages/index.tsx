import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ───── Feature cards data ───── */
type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: '💡',
    title: 'Start with an Idea',
    description:
      'Scope an MVP, sketch wireframes, and design your data model before writing a single line of code.',
  },
  {
    icon: '⚛️',
    title: 'Build with React',
    description:
      'Create a beautiful, mobile-first web app using React 19, TypeScript, Tailwind CSS v4, and Vite.',
  },
  {
    icon: '🔥',
    title: 'Power it with Firebase',
    description:
      'Add real authentication, a Firestore database, and cloud storage — a real backend, not mock data.',
  },
  {
    icon: '📱',
    title: 'Go Native with Capacitor',
    description:
      'Wrap your web app in a native iOS shell. Use the camera, haptic feedback, and shake detection.',
  },
  {
    icon: '🤖',
    title: 'Accelerate with Claude Code',
    description:
      'Use AI-assisted development at every step — scaffolding, debugging, iterating, and reviewing code.',
  },
  {
    icon: '🚀',
    title: 'Ship to TestFlight',
    description:
      'Navigate certificates, provisioning profiles, and App Store Connect. Get your app on real iPhones.',
  },
];

/* ───── Journey steps data ───── */
type JourneyStep = {
  part: string;
  title: string;
  chapters: string;
  color: string;
};

const journeySteps: JourneyStep[] = [
  {part: 'Part 1', title: 'The Idea', chapters: 'Chapter 1', color: '#6366f1'},
  {part: 'Part 2', title: 'Foundation', chapters: 'Chapters 2–3', color: '#8b5cf6'},
  {part: 'Part 3', title: 'Building the Web App', chapters: 'Chapters 4–9', color: '#ec4899'},
  {part: 'Part 4', title: 'Going Mobile', chapters: 'Chapters 10–13', color: '#f59e0b'},
  {part: 'Part 5', title: 'TestFlight', chapters: 'Chapters 14–16', color: '#10b981'},
  {part: 'Part 6', title: 'Next Steps', chapters: 'Chapters 17–18', color: '#06b6d4'},
];

/* ───── Tech stack data ───── */
const techStack = [
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS v4',
  'Firebase',
  'Capacitor',
  'Claude Code',
  'Xcode',
  'TestFlight',
];

/* ───── Components ───── */

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Free · Hands-on · No mobile experience needed</div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              A step-by-step tutorial that takes you from a blank folder to a real iOS app on TestFlight — using Claude Code at every step.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Start Building — It's Free
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>18</span>
                <span className={styles.statLabel}>Chapters</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Parts</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Free</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVideoCol}>
            <video
              className={styles.heroVideoFrame}
              controls
              playsInline
              preload="metadata">
              <source src="/img/tutorial.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </header>
  );
}

type AppFeature = {
  icon: string;
  title: string;
  description: string;
};

const appFeatures: AppFeature[] = [
  {
    icon: '🌳',
    title: 'Living SVG tree',
    description: 'Each journal entry grows a new branch on an animated SVG tree — rendered in real time as your memories accumulate.',
  },
  {
    icon: '📸',
    title: 'Text & photo entries',
    description: 'Write a thought or snap a photo directly from the app using the native iOS camera.',
  },
  {
    icon: '📳',
    title: 'Shake to remember',
    description: 'Shake your phone and a random past memory surfaces — powered by the device accelerometer.',
  },
  {
    icon: '🔥',
    title: 'Streak tracking',
    description: 'A fire animation rewards daily journaling streaks, encouraging a habit that sticks.',
  },
  {
    icon: '☁️',
    title: 'Real-time sync',
    description: 'Entries sync instantly across devices via Firestore — no refresh needed.',
  },
  {
    icon: '🔐',
    title: 'Full auth flow',
    description: 'Sign up, log in, and persist sessions — a complete Firebase Authentication integration.',
  },
];

function AppPreview() {
  return (
    <section className={styles.appPreview}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>What You'll Build</Heading>
        <p className={styles.appName}>GratitudeTree</p>
        <p className={styles.appDescription}>
          A daily journal app where every entry is a moment worth keeping. Write a thought, snap a photo, shake to rediscover a memory — built end-to-end with Claude Code.
        </p>
        <div className={styles.appFeatureGrid}>
          {appFeatures.map((f, idx) => (
            <div key={idx} className={styles.appFeatureItem}>
              <span className={styles.appFeatureIcon}>{f.icon}</span>
              <div>
                <strong className={styles.appFeatureTitle}>{f.title}</strong>
                <p className={styles.appFeatureDesc}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={styles.audience}>
      <div className="container">
        <div className={styles.audienceInner}>
          <Heading as="h2" className={styles.audienceTitle}>Who This Tutorial Is For</Heading>
          <p className={styles.audienceLead}>
            <strong>Anyone who has an app idea and wants to see it in the App Store.</strong>
          </p>
          <p className={styles.audienceBody}>
            You don't need to know React, Firebase, or mobile development. This tutorial
            teaches you everything from scratch — using Claude Code to accelerate every step:
          </p>
          <ul className={styles.audienceList}>
            <li>Writes and edits code directly in your project files</li>
            <li>Helps you debug errors without copying and pasting into a chat window</li>
            <li>Understands the full context of your codebase across every session</li>
            <li>Runs multiple tasks in parallel so you spend less time waiting</li>
            <li>Acts as a senior developer pair-programming alongside you</li>
          </ul>
          <p className={styles.audienceBody}>
            This is AI integrated into your actual development workflow — not bolted on as a chat window.
          </p>
          <p className={styles.audienceFootnote}>
            <strong>You don't need prior mobile or React experience.</strong> If you have a Mac and the drive to build something, you have everything you need to start.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What You'll Learn
        </Heading>
        <p className={styles.sectionSubtitle}>
          18 chapters covering the complete journey — no steps skipped, no hand-waving.
        </p>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <Heading as="h3" className={styles.featureCardTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureCardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyTimeline() {
  return (
    <section className={styles.journey}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          The Journey
        </Heading>
        <p className={styles.sectionSubtitle}>
          6 parts, 18 chapters, one complete iOS app.
        </p>
        <div className={styles.timeline}>
          {journeySteps.map((step, idx) => (
            <div key={idx} className={styles.timelineStep}>
              <div
                className={styles.timelineDot}
                style={{backgroundColor: step.color}}
              />
              <div className={styles.timelineContent}>
                <span
                  className={styles.timelinePart}
                  style={{color: step.color}}>
                  {step.part}
                </span>
                <Heading as="h3" className={styles.timelineTitle}>
                  {step.title}
                </Heading>
                <span className={styles.timelineChapters}>{step.chapters}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className={styles.techStack}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          The Stack
        </Heading>
        <p className={styles.sectionSubtitle}>
          Modern, well-documented technologies with large communities.
          When you get stuck, answers exist.
        </p>
        <div className={styles.techBadges}>
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prerequisites() {
  return (
    <section className={styles.prerequisites}>
      <div className="container">
        <div className={styles.prereqCard}>
          <Heading as="h2">Before You Start</Heading>
          <div className={styles.prereqGrid}>
            <div className={styles.prereqColumn}>
              <Heading as="h3" className={styles.prereqHeadingYes}>You Need</Heading>
              <ul className={styles.prereqList}>
                <li>A Mac (required for iOS development)</li>
                <li>A free GitHub account</li>
                <li>Apple Developer account ($99/year — sign up early)</li>
              </ul>
            </div>
            <div className={styles.prereqColumn}>
              <Heading as="h3" className={styles.prereqHeadingNo}>You Don't Need</Heading>
              <ul className={styles.prereqList}>
                <li>Prior React experience (we'll teach you)</li>
                <li>Mobile development experience</li>
                <li>Firebase knowledge</li>
                <li>An iPhone (Simulator works for most chapters)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to build your first iOS app?
        </Heading>
        <p className={styles.ctaSubtitle}>
          Start with Chapter 1 and work your way to TestFlight.
          Every step is explained. Every code block is tested.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/intro">
          Start the Tutorial
        </Link>
      </div>
    </section>
  );
}

/* ───── Main page ───── */

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Build Your First iOS App"
      description={siteConfig.tagline}>
      <HeroSection />
      <main>
        <AppPreview />
        <AudienceSection />
        <FeatureCards />
        <JourneyTimeline />
        <TechStackSection />
        <Prerequisites />
        <CTASection />
      </main>
    </Layout>
  );
}
