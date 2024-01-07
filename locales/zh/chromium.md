Fixed some bugs in the Chromium browser (the browser core behind Google Chrome, Microsoft Edge, Android Webview and many others, used by millions, if not billions, of people worldwide)

Fixed a bug that is causing screen capture to return smaller than screen size video stream on Windows and Linux: https://crrev.com/c/4583587 https://crrev.com/c/4826746

Fixed a bug that is causing fullscreen on Android pushes the entire pages down a bit: https://crrev.com/c/4777218

All changes: https://chromium-review.googlesource.com/q/owner:legendmastertony@gmail.com

---

It's very challenging to troubleshooting and changing code in a code base as big as Chromium, much harder than anything else I have done
