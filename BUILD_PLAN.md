# Tutorial Build Plan: From Idea to TestFlight with Claude Code

## Table of Contents

1. [Philosophy & Guiding Principles](#1-philosophy--guiding-principles)
2. [Tutorial Website — Platform & Architecture](#2-tutorial-website--platform--architecture)
3. [Look & Feel — Design System](#3-look--feel--design-system)
4. [Content Structure — How Each Chapter Works](#4-content-structure--how-each-chapter-works)
5. [Companion Repository Strategy](#5-companion-repository-strategy)
6. [Claude Code Integration — The Differentiator](#6-claude-code-integration--the-differentiator)
7. [Visual Assets — Screenshots, Diagrams, and Videos](#7-visual-assets--screenshots-diagrams-and-videos)
8. [Revised Chapter Outline](#8-revised-chapter-outline)
9. [Tutorial Website Implementation Plan](#9-tutorial-website-implementation-plan)
10. [Content Production Workflow](#10-content-production-workflow)
11. [Launch Checklist](#11-launch-checklist)

---

## 1. Philosophy & Guiding Principles

### The Reader

A beginner developer who:
- Knows basic HTML/CSS/JavaScript (or is learning)
- Has never shipped an iOS app
- May or may not have a Mac yet
- Wants to build something real, not another counter app
- Gets discouraged by walls of unexplained code

### Core Principles

| Principle | What It Means in Practice |
|---|---|
| **Show, don't just tell** | Every concept comes with a screenshot, diagram, or GIF showing the result |
| **One concept per step** | Never introduce two new ideas in the same code block |
| **Explain the "why" before the "how"** | Every section opens with context: why this matters, what problem it solves |
| **Fail forward** | Anticipate where readers will get stuck. Add troubleshooting callouts inline |
| **Checkpoint often** | After every meaningful change, show what the app should look like now |
| **Claude Code as copilot** | Demonstrate AI-assisted development at every stage — not as a crutch, but as a superpower |
| **Copy-paste must work** | Every code block must be tested, complete, and produce the stated result when pasted |
| **Progressive disclosure** | Start with the simplest version that works. Add complexity only when the reader is ready |

### What This Tutorial Is NOT

- Not a reference manual — it's a guided narrative
- Not framework documentation — it teaches through building
- Not a shortcut — readers will understand what they built and why

---

## 2. Tutorial Website — Platform & Architecture

### Platform: Docusaurus 3

**Why Docusaurus over alternatives:**

| Feature | Docusaurus | GitBook | Nextra | VitePress |
|---|---|---|---|---|
| Code block syntax highlighting | Built-in (Prism) | Basic | Good | Good |
| Tabbed code blocks (show alternatives) | Native plugin | No | Manual | No |
| Admonitions/callouts (tip, warning, danger) | Built-in | Limited | Manual | Limited |
| Sidebar auto-generation from file structure | Yes | Yes | Yes | Yes |
| Search | Algolia (free for OSS) | Built-in | Manual | Built-in |
| Custom React components in MDX | Full MDX support | No | Yes | No |
| Progress tracking (custom) | Easy to add | No | Possible | No |
| Cost | Free | Free tier limited | Free | Free |
| Community & maintenance | Meta-backed, very active | Commercial | Smaller | Vue-focused |

Docusaurus wins because of MDX support (we'll embed interactive components), admonitions (critical for a beginner tutorial), and the tabbed code blocks feature.

### Hosting: Vercel

- Zero-config deployment from GitHub
- Preview deployments on every PR (great for review)
- Free tier is more than sufficient
- Automatic HTTPS

### Site Architecture

```
tutorial-site/
├── docusaurus.config.ts          # Site config, navbar, footer
├── sidebars.ts                   # Auto-generated from folder structure
├── docs/
│   ├── intro.md                  # Welcome & prerequisites
│   ├── part-1-the-idea/
│   │   └── 01-blueprint.mdx
│   ├── part-2-foundation/
│   │   ├── 02-dev-environment.mdx
│   │   └── 03-scaffolding.mdx
│   ├── part-3-web-app/
│   │   ├── 04-ui-shell.mdx
│   │   ├── 05-entries.mdx
│   │   ├── 06-firestore.mdx
│   │   ├── 07-storage.mdx
│   │   ├── 08-auth.mdx
│   │   ├── 09-polish.mdx
│   │   └── 10-streaks-heatmap.mdx
│   ├── part-4-capacitor/
│   │   ├── 11-capacitor-setup.mdx
│   │   ├── 12-camera-haptics.mdx
│   │   ├── 13-shake.mdx
│   │   └── 14-ios-specifics.mdx
│   ├── part-5-testflight/
│   │   ├── 15-apple-developer.mdx
│   │   ├── 16-app-store-connect.mdx
│   │   └── 17-testflight.mdx
│   └── part-6-next-steps/
│       ├── 18-iteration.mdx
│       └── 19-app-store.mdx
├── src/
│   ├── components/
│   │   ├── ChapterCheckpoint.tsx     # "Your app should look like this" component
│   │   ├── ClaudeCodePrompt.tsx      # Styled Claude Code command/prompt block
│   │   ├── FileTree.tsx              # Visual file tree component
│   │   ├── ProgressTracker.tsx       # Chapter completion tracker
│   │   ├── TroubleshootingAccordion.tsx  # Expandable troubleshooting section
│   │   ├── BeforeAfter.tsx           # Side-by-side before/after screenshots
│   │   └── StepCounter.tsx           # Numbered step indicator
│   ├── css/
│   │   └── custom.css                # Theme overrides
│   └── pages/
│       └── index.tsx                 # Custom landing page
├── static/
│   ├── img/
│   │   ├── chapters/                 # Screenshots organized by chapter
│   │   │   ├── ch04/
│   │   │   ├── ch05/
│   │   │   └── ...
│   │   ├── diagrams/                 # Architecture & flow diagrams
│   │   └── hero/                     # Landing page assets
│   └── files/
│       └── gratitude-jar-wireframes.excalidraw
└── blog/                             # Optional: building-in-public updates
```

### Key Technical Decisions

- **MDX over plain Markdown** — allows embedding React components (checkpoint screenshots, Claude Code prompt blocks, expandable troubleshooting) directly in chapter content
- **One file per chapter** — keeps things simple, each file is self-contained
- **Chapter numbering in filenames** — ensures correct sidebar ordering
- **.mdx extension** — signals to Docusaurus to enable JSX support

---

## 3. Look & Feel — Design System

### Color Palette

```
Primary:      #6366F1 (Indigo 500) — links, active states, CTAs
Secondary:    #EC4899 (Pink 500) — accents, highlights, "try it" callouts
Background:   #FAFAFA (light mode) / #1A1A2E (dark mode)
Surface:      #FFFFFF (light) / #16213E (dark)
Text:         #1F2937 (light) / #E5E7EB (dark)
Success:      #10B981 — checkpoint passed, "it works!" moments
Warning:      #F59E0B — "heads up" callouts
Danger:       #EF4444 — common mistakes, "don't do this"
Claude:       #D97706 (Amber 600) — Claude Code prompt blocks
```

### Typography

- **Headings:** Inter (clean, modern, excellent readability)
- **Body:** System font stack (fast loading, familiar to readers)
- **Code:** JetBrains Mono or Fira Code (ligatures help beginners read operators)

### Visual Tone

The tutorial should feel:
- **Warm and encouraging** — not sterile or corporate
- **Like a conversation** — written in second person ("you"), casual but precise
- **Visually rich** — screenshots every few scrolls, never more than 2 screens of pure text
- **Uncluttered** — generous whitespace, one idea per section

### Custom Components (Visual Mockups)

#### 1. Claude Code Prompt Block

```
┌─────────────────────────────────────────────────┐
│  Claude Code                                    │
│ ─────────────────────────────────────────────── │
│  > "Create a React component called EntryCard   │
│    that displays a journal entry with the        │
│    title, date, and a preview of the content.    │
│    Use Tailwind CSS for styling."                │
│                                                  │
│  💡 Try this in your terminal:                   │
│  $ claude "Create a React component called..."   │
│                                                  │
└─────────────────────────────────────────────────┘
```

Shows readers exactly what to ask Claude Code and how to invoke it. Styled distinctly from regular code blocks (amber/warm border, Claude branding).

#### 2. Chapter Checkpoint

```
┌─────────────────────────────────────────────────┐
│  ✓ Checkpoint — End of Chapter 5                │
│ ─────────────────────────────────────────────── │
│                                                  │
│  [Screenshot of app at this stage]               │
│                                                  │
│  Your app should now:                            │
│  ✓ Display a feed of text entries                │
│  ✓ Open a modal to create new entries            │
│  ✓ Support edit and delete                       │
│  ✓ Persist entries in local state                │
│                                                  │
│  📦 Stuck? Compare your code:                    │
│  github.com/repo/tree/checkpoint-ch05            │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### 3. Troubleshooting Accordion

```
┌─────────────────────────────────────────────────┐
│  ⚠️ Common Issues                               │
│ ─────────────────────────────────────────────── │
│                                                  │
│  ▸ "Module not found: @capacitor/camera"         │
│  ▸ "Xcode signing error: No profiles found"      │
│  ▸ "Firebase: permission-denied"                 │
│  ▸ "Build failed: Could not find module..."      │
│                                                  │
│  (Click to expand each with solution)            │
└─────────────────────────────────────────────────┘
```

#### 4. Before/After Component

```
┌────────────────────┬────────────────────────────┐
│  Before            │  After                     │
│  [Screenshot]      │  [Screenshot]              │
│                    │                            │
│  Plain text feed   │  Styled cards with images  │
│  No interactivity  │  Edit/delete working       │
└────────────────────┴────────────────────────────┘
```

#### 5. Step Counter

```
  ① Install dependencies  →  ② Configure Firebase  →  ③ Write the service  →  ④ Test it
  ────●─────────────────────────●──────────────────────────○───────────────────────○────
       (done)                    (done)                   (current)              (next)
```

Visual progress within a chapter. Helps readers know where they are in a multi-step process.

---

## 4. Content Structure — How Each Chapter Works

### Chapter Template

Every chapter follows this consistent structure:

```
1. HERO IMAGE
   - Screenshot or illustration showing what you'll build in this chapter
   - "By the end of this chapter, your app will look like this"

2. CONTEXT (2-3 paragraphs)
   - What problem are we solving?
   - Why does this matter for the app?
   - What will you learn?

3. PREREQUISITES BOX
   - What you need from previous chapters
   - Any accounts/tools needed for this specific chapter

4. STEPS (the bulk of the chapter)
   - Numbered, sequential steps
   - Each step has:
     a. Brief explanation of what we're doing and why
     b. Code block (complete, copy-pasteable)
     c. What changed — highlight the key lines
     d. Expected result — screenshot or description
     e. Claude Code tip — how AI can help with this step
   - Troubleshooting callouts appear inline where errors are common

5. CHECKPOINT
   - Full screenshot of the app at this stage
   - Bulleted list of what should be working
   - Link to the checkpoint branch in the companion repo

6. KEY CONCEPTS SUMMARY
   - 3-5 bullet points of what you learned
   - Links to official docs for deeper reading

7. NEXT CHAPTER PREVIEW
   - One sentence teasing what's coming next
   - Creates momentum to keep going
```

### Writing Style Guide

**Do:**
- Use "you" and "we" — "Let's add the camera feature" / "You'll see a modal appear"
- Explain jargon on first use — "a provisioning profile (Apple's way of saying 'this app is allowed to run on this device')"
- Use analogies — "Think of Firestore rules like a bouncer at a club — they check IDs before letting data in"
- Show the output — after every meaningful code change, show what happened
- Celebrate milestones — "That's it! You just set up real-time sync. Every change now updates instantly."

**Don't:**
- Assume knowledge — never say "obviously" or "simply"
- Drop unexplained code — every code block needs context
- Use passive voice — "The component is rendered" → "React renders the component"
- Skip error scenarios — if something commonly fails at this step, address it

### Code Block Standards

```tsx
// ✅ Good — filename in the title, highlighted lines, complete context
// src/components/EntryCard.tsx

import { Entry } from '../types'

interface EntryCardProps {
  entry: Entry
  onEdit: (id: string) => void    // highlight-line
  onDelete: (id: string) => void  // highlight-line
}

export function EntryCard({ entry, onEdit, onDelete }: EntryCardProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{entry.date}</p>
      <p className="mt-2 text-gray-900">{entry.content}</p>
    </div>
  )
}
```

- Always include the file path as a comment or in the code block title
- Highlight new or important lines
- Show the full component/function, not just a snippet (beginners need full context)
- Use TypeScript throughout — but explain types as you introduce them
- Keep individual code blocks under 40 lines — split into multiple blocks with explanations between if longer

---

## 5. Companion Repository Strategy

### Approach: Branch-per-Chapter Checkpoints

```
main                    ← Final completed app (all chapters done)
├── checkpoint-ch03     ← After Chapter 3: bare scaffolding
├── checkpoint-ch04     ← After Chapter 4: UI shell with Tailwind
├── checkpoint-ch05     ← After Chapter 5: entries CRUD working
├── checkpoint-ch06     ← After Chapter 6: Firestore connected
├── checkpoint-ch07     ← After Chapter 7: photo uploads working
├── checkpoint-ch08     ← After Chapter 8: auth added
├── checkpoint-ch09     ← After Chapter 9: polish features
├── checkpoint-ch10     ← After Chapter 10: polish extended
├── checkpoint-ch11     ← After Chapter 11: Capacitor set up
├── checkpoint-ch12     ← After Chapter 12: camera & haptics
├── checkpoint-ch13     ← After Chapter 13: shake interaction
├── checkpoint-ch14     ← After Chapter 14: iOS-specific work
└── ...                 ← etc.
```

### Why Branches (Not Tags or Folders)

- Readers can `git diff checkpoint-ch05..checkpoint-ch06` to see exactly what changed
- They can jump to any chapter: `git checkout checkpoint-ch08`
- GitHub renders branch comparisons nicely in the browser
- No need to maintain 18 separate folders with duplicated code

### What Each Checkpoint Includes

- All source code up to that point
- A `CHECKPOINT.md` file at the root describing what's working
- Any required configuration (but NOT `.env` — that's always reader-specific)
- A working `package.json` with the exact dependencies needed at that stage

### Starter Template

Readers begin by cloning the repo and checking out `checkpoint-ch03` (the scaffolded project). This saves them from typos during initial setup while still having them build everything meaningful by hand.

---

## 6. Claude Code Integration — The Differentiator

This is what makes this tutorial unique. Every chapter should demonstrate how Claude Code accelerates development at that stage.

### Integration Levels

| Level | When to Use | Example |
|---|---|---|
| **Scaffold** | Generating boilerplate | "Use Claude Code to generate the Firebase config file" |
| **Explain** | Understanding concepts | "Ask Claude Code: 'What does onSnapshot do in Firestore?'" |
| **Debug** | When things break | "Paste the error into Claude Code and ask it to help fix it" |
| **Iterate** | Improving code | "Ask Claude Code to add loading states to the EntryCard" |
| **Review** | Checking your work | "Ask Claude Code to review your Firestore security rules" |

### Per-Chapter Claude Code Moments

| Chapter | Claude Code Integration |
|---|---|
| Ch 1: Blueprint | Ask Claude to help refine your data model |
| Ch 2: Setup | Use Claude to verify your environment is configured correctly |
| Ch 3: Scaffolding | Have Claude generate the initial project structure and TypeScript types |
| Ch 4: UI Shell | Ask Claude to create the app shell layout with Tailwind |
| Ch 5: Entries | Use Claude to generate the CRUD components |
| Ch 6: Firestore | Ask Claude to write the Firebase service layer |
| Ch 7: Storage | Have Claude implement image compression + upload logic |
| Ch 8: Auth | Use Claude to scaffold the auth flow |
| Ch 9-10: Polish | Ask Claude to build the calendar heatmap component |
| Ch 11: Capacitor | Use Claude to configure Capacitor and debug build issues |
| Ch 12: Camera | Ask Claude to integrate the camera plugin |
| Ch 13: Shake | Have Claude implement the shake detection algorithm |
| Ch 14: iOS | Use Claude to debug Xcode signing issues |
| Ch 15-17: TestFlight | Ask Claude to review your App Store metadata |

### Custom MDX Component: `<ClaudeCodePrompt>`

Every Claude Code moment in the tutorial uses a styled component:

```mdx
<ClaudeCodePrompt
  prompt="Create a React component called EntryCard that takes an Entry object
  and displays the date, content preview, and edit/delete buttons. Use Tailwind
  CSS for mobile-first styling with rounded corners and subtle shadows."
  context="We're building the feed view in Chapter 5. The Entry type is defined
  in src/types.ts."
  tip="Be specific about styling preferences. Claude Code gives better results
  when you describe the visual output you want."
/>
```

This renders as a visually distinct block that readers immediately recognize as "time to use Claude Code."

---

## 7. Visual Assets — Screenshots, Diagrams, and Videos

### Screenshot Strategy

Every chapter needs approximately **8-15 screenshots** covering:

1. **Before/after the chapter's changes** (the hero comparison)
2. **Each major step's result** (what you should see after pasting code)
3. **Terminal output** for CLI commands
4. **Browser DevTools** when relevant (Network tab, Console)
5. **Xcode screenshots** for Part 4-5 (signing, build settings, Organizer)
6. **Firebase Console** views when configuring services
7. **App Store Connect** screens for Part 5

### Screenshot Standards

- **Device frames:** Wrap mobile screenshots in iPhone frames (use a free mockup tool)
- **Annotations:** Use arrows/circles to highlight the important part of each screenshot
- **Consistent sizing:** All screenshots at 2x resolution, max 1200px wide
- **Dark/light:** Show the app in both modes where relevant
- **Alt text:** Every image must have descriptive alt text for accessibility

### Diagrams Needed

| Diagram | Purpose | Tool |
|---|---|---|
| Architecture overview | Show React → Capacitor → iOS wrapper | Excalidraw |
| Data flow | Entry creation → Firestore → Storage → Feed | Excalidraw |
| Auth flow | Login → Firebase Auth → Protected routes | Excalidraw |
| Build pipeline | Code → Vite build → Cap sync → Xcode → TestFlight | Excalidraw |
| Firestore structure | Visual tree of collections and documents | Excalidraw |
| Certificate chain | Dev cert → Provisioning profile → App ID | Excalidraw |

### Optional: Short GIF/Video Clips

For key "wow moments" that are hard to capture in a static image:

- The shake interaction working on a real phone (3-5 second GIF)
- Real-time sync between two browser tabs (5 second GIF)
- The TestFlight install experience on a real device (10 second clip)

Use a GIF for anything under 10 seconds. Link to YouTube/Loom for longer demos.

---

## 8. Revised Chapter Outline

Changes from the original plan:
- **Split Chapter 9** (too much content) into two chapters: Polish (Ch 9) and Streaks & Heatmap (Ch 10)
- **Added Claude Code integration** to every chapter
- **Total: 19 chapters** (was 18)
- **Added troubleshooting sections** to chapters where beginners commonly get stuck
- **Added intro page** before Chapter 1

### Full Outline

```
INTRO: Welcome & Prerequisites
  - Who this tutorial is for
  - What you'll build (with screenshots of the final app)
  - What you'll need (Mac, Apple Developer account, etc.)
  - How to use this tutorial (sequential, checkpoints, Claude Code)
  - Estimated time: ~20-30 hours spread over a few weeks

PART 1 — THE IDEA
  Chapter 1: From Idea to Blueprint
    + Claude Code: Refining your data model with AI

PART 2 — THE FOUNDATION
  Chapter 2: Dev Environment Setup
    + Claude Code: Verify your setup is correct
    + Troubleshooting: common setup issues per OS
  Chapter 3: Project Scaffolding
    + Claude Code: Generate initial project structure
    + First checkpoint (bare project runs with npm run dev)

PART 3 — BUILDING THE WEB APP
  Chapter 4: UI Shell with Tailwind CSS
    + Claude Code: Build the app shell layout
    + Checkpoint: app shell with tabs renders
  Chapter 5: Core Feature — Entries
    + Claude Code: Generate CRUD components
    + Checkpoint: can create, read, edit, delete entries (local state)
  Chapter 6: Firebase Backend — Firestore
    + Claude Code: Write the Firebase service
    + Troubleshooting: Firebase config mistakes, security rules
    + Checkpoint: entries persist in Firestore, real-time sync works
  Chapter 7: Firebase Storage — Photo Uploads
    + Claude Code: Implement compression + upload
    + Troubleshooting: CORS issues, storage rules
    + Checkpoint: can upload photos, see them in feed
  Chapter 8: Authentication
    + Claude Code: Scaffold the auth flow
    + Troubleshooting: auth state edge cases
    + Checkpoint: login/signup works, data is per-user
  Chapter 9: Polish — States & Onboarding
    + Empty states, loading states, error messages
    + Landing/onboarding screen
    + Checkpoint: app feels polished with all states handled
  Chapter 10: Streaks & Calendar Heatmap
    + Claude Code: Build the heatmap component
    + Date math, timezone handling
    + Checkpoint: heatmap and streak counter visible on profile

PART 4 — GOING MOBILE WITH CAPACITOR
  Chapter 11: Capacitor Setup
    + Claude Code: Configure Capacitor
    + Troubleshooting: cap sync failures, Xcode project issues
    + Checkpoint: app runs in iOS Simulator
  Chapter 12: Native Plugins — Camera & Haptics
    + Claude Code: Integrate camera plugin
    + Troubleshooting: permissions, Info.plist
    + Checkpoint: can take photos on device
  Chapter 13: The Shake Interaction
    + Claude Code: Implement shake detection
    + Checkpoint: shake surfaces random entry with haptics
  Chapter 14: iOS-Specific Work
    + Safe areas, keyboard handling, touch targets
    + App icon and splash screen
    + Claude Code: Debug Xcode issues
    + Checkpoint: app looks and feels native on iPhone

PART 5 — PUBLISHING TO TESTFLIGHT
  Chapter 15: Apple Developer Account
    + Certificates, profiles, and IDs explained simply
    + Troubleshooting: signing issues (the #1 pain point)
  Chapter 16: App Store Connect Setup
    + Creating the app record, metadata, privacy policy
    + Screenshot requirements
  Chapter 17: Building & Uploading to TestFlight
    + Archive → Upload → Processing → Invite testers
    + Troubleshooting: build upload failures
    + FINAL CHECKPOINT: app is live on TestFlight!

PART 6 — NEXT STEPS
  Chapter 18: The Update Cycle
    + Code change → build → sync → new build → upload
  Chapter 19: App Store Submission
    + TestFlight → production: what changes
    + Common rejection reasons and how to avoid them
```

---

## 9. Tutorial Website Implementation Plan

### Phase 1: Foundation (Week 1)

**Goal:** Docusaurus site is running, deployed, and has the landing page + intro.

```
Step 1: Initialize Docusaurus project
  $ npx create-docusaurus@latest tutorial-site classic --typescript

Step 2: Configure docusaurus.config.ts
  - Site title, tagline, URL
  - Navbar with logo, "Tutorial" link, GitHub link
  - Footer with links
  - Theme colors (indigo/pink palette)
  - Enable MDX
  - Configure Algolia search (or use local search plugin initially)

Step 3: Build the landing page (src/pages/index.tsx)
  - Hero section: "Build Your First iOS App with AI"
  - App preview (iPhone mockup with GratitudeJar screenshots)
  - What you'll learn (6 icons with short descriptions)
  - Tech stack badges
  - "Start the Tutorial" CTA button
  - Testimonials section (placeholder for now)

Step 4: Write docs/intro.md
  - Full prerequisites list
  - Time estimate
  - How to use this tutorial
  - How Claude Code fits in

Step 5: Create folder structure for all parts/chapters
  - Empty .mdx files with frontmatter (title, sidebar_position, description)
  - Sidebar auto-generates from the structure

Step 6: Deploy to Vercel
  - Connect GitHub repo
  - Automatic deployments on push
```

### Phase 2: Custom Components (Week 1-2)

**Goal:** All reusable MDX components are built and documented.

```
Step 1: <ClaudeCodePrompt> component
  - Amber-bordered block with Claude branding
  - Props: prompt, context (optional), tip (optional)
  - Syntax highlighting for the prompt text

Step 2: <ChapterCheckpoint> component
  - Green success border
  - Image slot for screenshot
  - Checklist of what should work
  - Link to checkpoint branch

Step 3: <TroubleshootingAccordion> component
  - Expandable sections
  - Each item: error message → explanation → solution
  - Red/warning styling

Step 4: <FileTree> component
  - Visual directory tree
  - Highlight which files changed in this step
  - Collapsible folders

Step 5: <BeforeAfter> component
  - Side-by-side image comparison
  - Labels and captions

Step 6: <StepCounter> component
  - Horizontal progress dots
  - Current step highlighted

Step 7: Document all components in a hidden /docs/components-demo page
  - Shows how to use each component in MDX
  - Serves as a reference for content writers
```

### Phase 3: Content Production (Weeks 2-6)

**Goal:** All 19 chapters written, with screenshots and diagrams.

Write chapters in this order (dependency-driven):

```
Batch 1 (Week 2): Chapters 1-3
  - Conceptual + setup chapters
  - Build the GratitudeJar scaffold for real
  - Take screenshots of every setup step
  - Create the checkpoint-ch03 branch

Batch 2 (Week 3): Chapters 4-6
  - UI + core features + Firestore
  - Build the actual app alongside writing
  - Heavy screenshot work (app states, Firebase console)
  - Create checkpoint-ch04 through checkpoint-ch06

Batch 3 (Week 4): Chapters 7-10
  - Storage, auth, polish, heatmap
  - The "meaty" web app chapters
  - Create architecture diagrams (data flow, auth flow)
  - Create checkpoint-ch07 through checkpoint-ch10

Batch 4 (Week 5): Chapters 11-14
  - Capacitor + native features
  - Requires actual device testing
  - Heavy Xcode screenshot work
  - Create checkpoint-ch11 through checkpoint-ch14

Batch 5 (Week 6): Chapters 15-19
  - TestFlight + submission
  - Requires Apple Developer account access
  - App Store Connect screenshots
  - Create final checkpoint branches
```

### Phase 4: Polish & QA (Week 7)

```
- Full read-through from start to finish by someone who hasn't seen it
- Test every code block: copy-paste each one into a fresh project
- Verify all checkpoint branches match the written code
- Test all links (internal and external)
- Mobile responsiveness check on the tutorial site itself
- Lighthouse audit (accessibility, performance, SEO)
- Search functionality testing
- Final screenshot consistency pass
```

### Phase 5: Launch (Week 8)

```
- Final deploy to production domain
- Social sharing metadata (Open Graph, Twitter cards)
- Submit to community sites (dev.to, Hacker News, Reddit r/reactjs, r/iOSProgramming)
- Create a short intro video/trailer (optional)
```

---

## 10. Content Production Workflow

### For Each Chapter

```
1. BUILD IT FIRST
   - Actually build the feature in the GratitudeJar app
   - Take notes on every step, every error, every "aha" moment
   - Note where Claude Code helped

2. SCREENSHOT EVERYTHING
   - Capture the app at each meaningful state
   - Capture terminal output for CLI commands
   - Capture any console/tool views
   - Annotate screenshots with arrows/highlights

3. WRITE THE CHAPTER
   - Follow the chapter template (Section 4 above)
   - Write in a conversational tone
   - Include all code blocks with file paths
   - Add Claude Code prompts at natural integration points
   - Add troubleshooting callouts where you or others got stuck

4. CREATE THE CHECKPOINT
   - Branch from the previous checkpoint
   - Ensure code matches what the chapter describes exactly
   - Add CHECKPOINT.md
   - Test: clone, install, run — does it work?

5. REVIEW
   - Read it fresh the next day
   - Check: would a beginner follow this without outside help?
   - Verify all code blocks are complete and correct
   - Check all images load and have alt text
```

### Tools for Content Production

| Task | Tool |
|---|---|
| Writing | VS Code with MDX extension |
| Screenshots | macOS Screenshot (Cmd+Shift+4) or CleanShot X |
| Screenshot annotations | Skitch or CleanShot X |
| Device mockups | Shots.so (free) or Rotato |
| Diagrams | Excalidraw (free, embeddable) |
| GIFs | Kap (free, macOS) or LICEcap |
| Image optimization | Sharp (automated in build) or Squoosh |

---

## 11. Launch Checklist

### Before Going Live

- [ ] All 19 chapters written and reviewed
- [ ] All screenshots taken and annotated
- [ ] All code blocks tested (copy-paste works)
- [ ] All checkpoint branches created and verified
- [ ] Companion repo README explains the branch structure
- [ ] Search is working (Algolia or local)
- [ ] Mobile responsive on tutorial site
- [ ] Dark mode works on tutorial site
- [ ] All internal links work
- [ ] All external links work
- [ ] Open Graph / social sharing images set
- [ ] Lighthouse score: 90+ on all categories
- [ ] Landing page looks great on mobile and desktop
- [ ] Favicon and site icons set
- [ ] Custom 404 page
- [ ] Google Analytics or Plausible analytics set up
- [ ] RSS feed for blog (if using blog section)

### Content Quality Checks

- [ ] No "simply" or "obviously" in the text
- [ ] Every code block has a file path
- [ ] Every chapter has a checkpoint
- [ ] Every chapter has at least one Claude Code integration
- [ ] Every chapter has troubleshooting for known issues
- [ ] All jargon explained on first use
- [ ] Consistent terminology throughout (same names for same things)
- [ ] Time estimates per chapter are realistic

### Companion Repo Checks

- [ ] `main` branch has the complete final app
- [ ] All checkpoint branches exist and are correctly named
- [ ] Each checkpoint has a CHECKPOINT.md
- [ ] `git diff` between adjacent checkpoints matches chapter content
- [ ] `.env.example` exists (not `.env`)
- [ ] README explains how to use the repo with the tutorial

---

## Summary: What Makes This Tutorial Best-in-Class

| Aspect | How We Nail It |
|---|---|
| **Accessibility** | Docusaurus with search, dark mode, mobile-responsive, alt text on all images |
| **Digestibility** | One concept per step, checkpoints every chapter, progressive disclosure |
| **Usability** | Copy-paste code blocks, Claude Code prompts, troubleshooting inline |
| **Completeness** | Idea → web app → cloud backend → native → TestFlight, nothing hand-waved |
| **Uniqueness** | Claude Code integration at every stage, the AI-assisted development angle |
| **Trust** | Checkpoint branches let readers verify they're on track at any point |
| **Visual richness** | Screenshots, annotated diagrams, before/after comparisons, device mockups |
| **Empathy** | Anticipates errors, explains jargon, celebrates milestones, never condescends |
