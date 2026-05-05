# Build Your First iOS App with Claude Code — From Zero to TestFlight

You don't need iOS experience. You don't need to know Swift. In this guide, you'll build a real iOS app — a daily gratitude journal called **GratitudeTree** — using React, Firebase, and Claude Code as your pair programmer. By the end, it'll be on TestFlight and running on real iPhones.

The full step-by-step tutorial lives at **[buildyourfirstapp.com](https://buildyourfirstapp.com)**. This article is the condensed version — everything you need to go from an empty folder to a TestFlight build.

---

## What You're Building

GratitudeTree is a journaling app where users write what they're grateful for, snap photos, and shake their phone to rediscover a random past entry. It has:

- Text and photo journal entries with real-time sync
- Email/password authentication
- A streak counter with animated fire icon
- Native camera, haptic feedback, and shake detection
- A living tree that grows leaves as you journal

**Tech stack:** React + TypeScript + Vite + Tailwind CSS v4 + Firebase + Capacitor

You write the web app in React. Capacitor wraps it in a native iOS shell. Firebase handles auth, database, and file storage. Claude Code writes most of the code — you guide it.

---

## Prerequisites

- A Mac (required for iOS development)
- Xcode installed from the Mac App Store
- Node.js 18+ (`node --version` to check)
- An Anthropic API key or Claude Pro/Max subscription
- An Apple Developer account ($99/year — needed for TestFlight)

---

## Part 1: Setup (15 minutes)

### Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Authenticate, then create your project:

```bash
mkdir gratitude-tree && cd gratitude-tree
claude
```

### Scaffold the project

Tell Claude Code:

> Create a new Vite project with React and TypeScript in this directory. Then install these dependencies: firebase, lucide-react, @tailwindcss/vite, and tailwindcss. Configure Tailwind CSS v4 with the Vite plugin.

Then:

> Clean up the Vite starter files. Replace App.tsx with a minimal "Hello GratitudeTree" component. Create the folder structure: src/components/, src/pages/, src/lib/, src/hooks/. Create a CLAUDE.md file describing our tech stack and project structure.

### Set up Firebase

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project** → name it `gratitude-tree`
2. Enable **Authentication** (Email/Password) under Build → Authentication
3. Enable **Cloud Firestore** under Build → Firestore Database (start in test mode)
4. Enable **Storage** under Build → Storage (start in test mode)
5. Go to Project Settings → Add a **Web app** → copy the config values

Tell Claude Code:

> Create a .env file with placeholder Firebase config variables (VITE_FIREBASE_API_KEY, etc.) and a firebase.ts config file at src/lib/firebase.ts that reads from environment variables.

Paste your Firebase config values into the `.env` file.

---

## Part 2: Build the Web App (2–4 hours)

This is where Claude Code does the heavy lifting. Each prompt below builds a major piece of the app. Run `npm run dev` to see changes in your browser as you go.

### App shell

> Create a mobile-first app scaffold with a fixed header at the top, a bottom navigation bar with three tabs (Feed, Add, Profile), and a content area that fills the remaining space. Use warm amber tones. Add safe area padding for iPhone notches.

### Entry creation + Firestore

> Create an entry form on the Add tab. Users can toggle between text and photo entry types. Text entries have a textarea. Photo entries have a file input with image preview and optional caption. Wire the Save button to write entries to a Firestore collection called "entries" with fields: type, text, imageUrl, caption, createdAt (serverTimestamp), and userId. Create an image compression utility that resizes photos to max 1200×1200 at 80% JPEG quality before uploading to Firebase Storage.

### Feed

> Update the Feed page to display entries as cards (like a social media feed) using a Firestore onSnapshot real-time listener. Show the image, text, caption, and a relative timestamp. Tapping a card should open a detail view with Edit and Delete actions.

### Authentication

> Create a useAuth hook that tracks login state with onAuthStateChanged. Build a login/signup screen with email and password. Update App.tsx to show the auth screen when not logged in. Make entries user-specific by adding a userId field and filtering queries with where('userId', '==', userId). Update the Profile tab to show the user's email and a logout button.

After this step, update your Firestore security rules in the Firebase console:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /entries/{entryId} {
      allow read, update, delete: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

### Polish

> Add skeleton loading cards while entries load. Create an empty state with a friendly message and "Create Your First Entry" button when there are no entries. Build a toast notification system that slides down from the top for success and error feedback.

### Streaks

> Add a daily streak counter to the right side of the header with an animated fire icon. The fire fills with color when the streak is active and appears as an outline when it's zero. Each calendar day with at least one entry counts as one streak day. Missing a day resets the streak. Tapping the fire opens a calendar modal showing which days have entries. Add three stat cards to the Profile page: Current Streak, Best Streak, and Entries Created.

At this point you have a fully working web app. Test it thoroughly in your browser — create entries, upload photos, log out and back in, verify the streak works.

---

## Part 3: Go Native with Capacitor (1–2 hours)

### Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "GratitudeTree" "com.yourname.gratitudetree"
npm run build
npx cap add ios
npx cap sync
npx cap open ios
```

This opens Xcode. Select an iPhone simulator and press `Cmd + R` to run your app as a native iOS app.

### Set up live reload for development

Tell Claude Code:

> Add a server block to capacitor.config.ts pointing to http://localhost:5173 so the iOS app loads from the Vite dev server during development. Also add a helper npm script to build, sync, and open Xcode in one command.

Now `npm run dev` in one terminal and run from Xcode in another — changes appear instantly.

### WKWebView compatibility fixes

Capacitor runs your app inside WKWebView, which doesn't support some browser APIs. Two critical fixes:

Tell Claude Code:

> In our Firebase config, replace getFirestore with initializeFirestore and use persistentSingleTabManager instead of the default persistence. WKWebView doesn't support BroadcastChannel or SharedWorker, so persistentMultipleTabManager deadlocks.

> Also replace getAuth with initializeAuth using indexedDBLocalPersistence. The default auth persistence auto-detection hangs in WKWebView.

### Native plugins

```bash
npm install @capacitor/camera @capacitor/haptics @capacitor/motion
```

Tell Claude Code:

> Create a camera service that uses Capacitor's native camera on iOS and falls back to file input on web. Create a haptics service with functions for light, medium, and heavy impacts. Update the Create page with "Take Photo" and "Choose from Library" buttons. Add haptic feedback to key interactions like tab switches, save, and delete.

### Shake-to-discover

> Create a useShakeDetection hook using @capacitor/motion that detects phone shakes via the accelerometer. When a shake is detected, pick a random entry, fire a heavy haptic, and show it in a full-screen overlay with a bounce-in animation. Add a fallback button in the header for testing on the Simulator.

### iOS polish

> Apply safe area insets to the header and bottom nav so content doesn't overlap the notch or home indicator. Fix keyboard behavior so the webview resizes properly when the keyboard appears. Audit touch target sizes — everything tappable should be at least 44×44 points.

### App icon

Tell Claude Code:

> Generate a 1024×1024 app icon for GratitudeTree — a warm amber gradient with a simple tree silhouette. Save it as AppIcon.png.

In Xcode, go to the asset catalog → AppIcon → drag in the 1024×1024 image. Xcode auto-generates all required sizes.

---

## Part 4: TestFlight (1–2 hours)

### Apple Developer account

If you haven't already, enroll at [developer.apple.com/programs](https://developer.apple.com/programs) ($99/year). Enrollment can take 24–48 hours to process.

In Xcode, go to **Settings → Accounts** and add your Apple ID. Under **Signing & Capabilities** in your target, enable **Automatically manage signing** and select your team.

### Create the app record

1. Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com) → **My Apps** → **+** → **New App**
2. Set Platform to iOS, name to GratitudeTree, select your Bundle ID, set SKU to `gratitudetree`
3. Click **Create**

That's all you need for TestFlight — no screenshots, descriptions, or privacy policy required yet.

### Production build

Remove the dev server block from `capacitor.config.ts` (the `server: { url: "http://..." }` section), then:

```bash
npm run build
npx cap sync
```

Test in the Simulator — the app should load without a dev server running. If you see a blank white screen, the server block wasn't fully removed.

### Archive and upload

1. In Xcode, select **Any iOS Device (arm64)** as the build destination (not a Simulator)
2. Go to **Product → Archive** (wait 1–3 minutes)
3. In the Organizer window, click **Distribute App** → **App Store Connect** → **Upload**
4. Leave all defaults and click **Upload**
5. Wait 2–5 minutes for validation

### Invite testers

1. In App Store Connect → your app → **TestFlight** tab
2. Wait for processing to complete (5–30 minutes)
3. Answer the export compliance question (Yes, uses encryption — Yes, exempt — standard HTTPS)
4. Click **Internal Testing** → **+** → create a group → add tester emails
5. Click **Start Testing**

Testers get an email, install the TestFlight app, accept the invite, and your app is on their phone.

---

## You Did It

You went from an empty folder to a real iOS app on TestFlight — with authentication, real-time data sync, photo uploads, native camera and haptics, shake detection, streaks, and a living tree that grows as you journal. All guided by Claude Code.

The full tutorial at **[buildyourfirstapp.com](https://buildyourfirstapp.com)** covers every step in detail with troubleshooting guides, checkpoint checklists, and explanations of every concept. It also covers App Store submission if you want to go all the way to a public release.

Now go build something.
