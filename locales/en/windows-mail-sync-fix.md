[Windows Mail app](https://apps.microsoft.com/store/detail/mail-and-calendar/9WZDNCRFHVQM) doesn't sync Gmail (download new content set to as items arrive) automatically when minimized/closed (UWP suspended)

And after searching through the internet for like a whole day and tried a lot methods

> reset the app, update your app, update windows, reboot, hope it helps

I gave up and made this

This program simply run it with debug enabled
(according to [Microsoft Docs](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/run-minimized-with-extended-execution#:~:text=These%20application%20lifecycle%20time%20constraints%20are%20disabled%20while%20the%20app%20is%20running%20under%20a%20debugger.)), and prelaunch it once terminated, and this will make it sync after minimized and even closed (will re-prelaunch in background)

> These application lifecycle time constraints are disabled while the app is running under a debugger.

-> [More stories about the development of this program](https://github.com/Legend-Master/WindowsMailAutoSyncFix/blob/main/story.md)

https://github.com/Legend-Master/WindowsMailAutoSyncFix
