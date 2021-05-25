# Local-Tube

## Table-of-Contents

- [Introduction](https://github.com/MeepMr/Local-Tube/new/master#the-why)
- [What it does](https://github.com/MeepMr/Local-Tube/new/master#the-why)
- [Prerequisites](https://github.com/MeepMr/Local-Tube/new/master#prerequisite)
- [How To](https://github.com/MeepMr/Local-Tube/new/master#the-how)
- [License](https://github.com/MeepMr/Local-Tube/new/master#license) Coming soon to a GitHub near you


## The why
On my approach to get rid of as many Google-Services as possible, I decided to host my own youtube.
Since no creator would upload videos to my crappy website (understandable), I had to come up with a Solution.
Meet Loacl-Tube, a locally hosted Node.js Web-Server, that downloads and delivers all Videos available on YouTube.

## What does it do?
- If you open `www.yourdomain.com/download/<videoId>/<filename>` in your browser, your browser should start to download the YouTube-Video with the matching id
- When opening `www.youtdomain.com/register/<videoId>` the webserver will register the video-id in its database and dowload it to the specified path.
You will then presented with a website containing a link to watch the video, as soon as it is downloaded.
- By opening `www.yourdomain.com/watch/<videoId>` your browser will play the previously downloaded video. And only the video.
- You can delete a video from the databese and the file-system by navigating to `www.yourdomain.com/delete/<videoId>`
- And by navigating to `www.yourdomain.com/delete/all` the webserver will delete all regitered videos from the File-System and then wipe its database

## Prerequisite

### General things
- A Home-Server [e.g. a raspberry pi] or a Remote-Server
- Enough Storage-Space to store the videos
- A good internet-Connection to improve the download-Time
- A domain and a dyn-dns client installed. [This is needed, so you can watch the downloaded Videos, wherever you are]
- Alternative: A VPN-Connection to your Server

### Dependencies for Local-Tube
- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org)
- [Youtube-dl](https://ytdl-org.github.io/youtube-dl/download.html)
- Run `youtube-dl --version` to check if Youtube-dl is installed correctly.
- [FFmpeg](https://ffmpeg.zeranoe.com/builds/)
- Run `ffmpeg -version` to check if FFmpeg is installed correctly.
- Proceed only if above 2 packages are installed correctly and versions are displayed in terminal.

## The How
Coming soon (tm)

## License

Not sure what license to use
