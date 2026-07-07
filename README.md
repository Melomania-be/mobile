# Melomania Mobile App Distribution Guide

This guide describes how to distribute the mobile app to Aurian and other users, and how they can install it on their phones.

---

## 📱 Android Installation (APK)

Since the app is not published on the Google Play Store, Android users can install the app package (`.apk`) directly.

### How to get the APK
The latest compiled Android app package is named **`app-debug.apk`**.

### Installation Steps for Android Users:
1. **Download the APK:** Open the GitHub release link or repository page on your Android phone and download the `app-debug.apk` file.
2. **Open the File:** Once downloaded, tap the file in your downloads folder or notification bar.
3. **Enable Unknown Sources (First time only):** 
   * Android will show a warning: *"For your security, your phone is not allowed to install unknown apps from this source."*
   * Tap **Settings** on the prompt.
   * Toggle **Allow from this source** to enabled (this permits your browser or file manager to install the file).
   * Tap **Back**.
4. **Install:** Tap **Install** on the prompt.
5. **Launch:** Tap **Open** to launch Melomania!

---

## 🍏 iOS / iPhone Installation (Alternative)

Directly side-loading application packages (`.ipa` files) on iPhones is blocked by Apple's operating system security unless using Xcode or developer accounts. 

Fortunately, since the mobile app is a native wrapper that loads the live server (`https://tool.melomania.be`), iOS users can install a **Progressive Web App (PWA)**, which behaves exactly like a native app:

### Installation Steps for iOS Users:
1. **Open Safari:** Navigate to **`https://tool.melomania.be`** in the Safari browser on your iPhone.
2. **Share Menu:** Tap the **Share** button (the square icon with an arrow pointing up at the bottom of the screen).
3. **Add to Home Screen:** Scroll down the list of options and tap **Add to Home Screen**.
4. **Confirm:** Tap **Add** in the top right corner.

A **Melomania** icon will be added to your iPhone's home screen. Launching it from the home screen opens the app in fullscreen mode (no address bar) with native-like navigation!

---

## 🛠 Instructions for Developer (Alfred)

### 1. Locate the Compiled APK
The Android APK has been compiled on your machine and is located at:
`mobile/android/app/build/outputs/apk/debug/app-debug.apk`

### 2. How to Upload the APK to GitHub Releases (Recommended)
Do not commit the binary `.apk` directly into your git repository, as this bloat slows down repository checkout speeds. Instead, upload it as a release asset:
1. Go to your repository on **GitHub.com**.
2. On the right-hand sidebar, click **Releases** $\rightarrow$ **Draft a new release**.
3. Create a version tag (e.g., `v1.0.0`) and title.
4. Drag and drop **`app-debug.apk`** from your computer into the box labeled *"Attach binaries by dropping them here"*.
5. Publish the release. Users can now download the APK directly from the release page!
