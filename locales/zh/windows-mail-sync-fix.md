[Windows Mail app](https://apps.microsoft.com/store/detail/mail-and-calendar/9WZDNCRFHVQM) 不会自动在后台自动同步 Gmail (下载新内容的时机设置成当有新邮件时)

在网上搜了一圈之后也没找到什么解决办法就做了这个程序

这个程序会用 debug 模式来运行它 ([Microsoft Docs](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/run-minimized-with-extended-execution#:~:text=These%20application%20lifecycle%20time%20constraints%20are%20disabled%20while%20the%20app%20is%20running%20under%20a%20debugger.))，然后在它终止的时候重新预启动，这样就可以在邮件应用最小化甚至关闭的时候也能自动同步了

-> [更多关于这个程序的开发故事（英文）](https://github.com/Legend-Master/WindowsMailAutoSyncFix/blob/main/story.md)

https://github.com/Legend-Master/WindowsMailAutoSyncFix
