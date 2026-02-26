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
      'Learn how to scope an MVP, sketch wireframes, and design your data model before writing a single line of code.',
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
      'Add real authentication, a Firestore database, and cloud storage for photos — a real backend, not mock data.',
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
      'Use AI-assisted development at every step — scaffolding, debugging, iterating, and reviewing your code.',
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
  {part: 'Part 3', title: 'Building the Web App', chapters: 'Chapters 4–10', color: '#ec4899'},
  {part: 'Part 4', title: 'Going Mobile', chapters: 'Chapters 11–14', color: '#f59e0b'},
  {part: 'Part 5', title: 'TestFlight', chapters: 'Chapters 15–17', color: '#10b981'},
  {part: 'Part 6', title: 'Next Steps', chapters: 'Chapters 18–19', color: '#06b6d4'},
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
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            A free, step-by-step tutorial that takes you from a blank folder to a
            real iOS app on TestFlight. No prior mobile experience needed.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Building — It's Free
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.heroButtonOutline)}
              href="https://github.com/parvsondhi/iOS-App-Tutorial-with-Claude-Code">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function AppPreview() {
  return (
    <section className={styles.appPreview}>
      <div className="container">
        <div className={styles.appPreviewInner}>
          <div className={styles.appPreviewText}>
            <Heading as="h2">What You'll Build</Heading>
            <p className={styles.appName}>GratitudeJar</p>
            <p>
              A daily journal app where every entry is a moment worth keeping.
              Write a thought or snap a photo. Shake the jar to rediscover a
              random past memory.
            </p>
            <ul className={styles.featureList}>
              <li>Text and photo journal entries</li>
              <li>Real-time sync across devices</li>
              <li>Camera integration with native iOS</li>
              <li>Shake-to-discover random memories</li>
              <li>Calendar heatmap and streaks</li>
              <li>Full authentication flow</li>
            </ul>
          </div>
          <div className={styles.appPreviewMockup}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <span className={styles.phoneTime}>9:41</span>
                </div>
                <div className={styles.phoneApp}>
                  <div className={styles.phoneAppHeader}>GratitudeJar</div>
                  <div className={styles.phoneEntry}>
                    <div className={styles.entryDate}>Today</div>
                    <div className={styles.entryText}>
                      Grateful for the morning coffee and quiet time to learn something new.
                    </div>
                  </div>
                  <div className={styles.phoneEntry}>
                    <div className={styles.entryPhoto} />
                    <div className={styles.entryCaption}>Sunset at the park</div>
                  </div>
                  <div className={styles.phoneEntry}>
                    <div className={styles.entryDate}>Yesterday</div>
                    <div className={styles.entryText}>
                      Finished Chapter 5 of the tutorial!
                    </div>
                  </div>
                  <div className={styles.phoneNav}>
                    <span>Feed</span>
                    <span>+</span>
                    <span>Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          19 chapters covering the complete journey — no steps skipped, no hand-waving.
        </p>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className={styles.featureIcon}>{feature.icon}</div>
              <Heading as="h3" className={styles.featureCardTitle}>
                {feature.title}
              </Heading>
              <p>{feature.description}</p>
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
          6 parts, 19 chapters, one complete iOS app.
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
            <div>
              <Heading as="h3">You Need</Heading>
              <ul>
                <li>A Mac (required for iOS development)</li>
                <li>Basic HTML, CSS, and JavaScript knowledge</li>
                <li>A free GitHub account</li>
                <li>Apple Developer account ($99/year — sign up early)</li>
              </ul>
            </div>
            <div>
              <Heading as="h3">You Don't Need</Heading>
              <ul>
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
        <FeatureCards />
        <JourneyTimeline />
        <TechStackSection />
        <Prerequisites />
        <CTASection />
      </main>
    </Layout>
  );
}
