# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Huiying Wang**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/puzzle-shocking-tango)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X](https://cdn.glitch.com/6748b3cd-0ddf-4ca9-b4d2-9e300dd5caaf%2Fpre-work1.gif?v=1616112257819)
![X](https://cdn.glitch.com/6748b3cd-0ddf-4ca9-b4d2-9e300dd5caaf%2Fpre-work2.gif?v=1616112627973)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [(1) W3School-CSS and JavaScript Tutorial
   (2) Stack Overflow]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   [The biggest challenge I encountered when completing this project was adding the ticking clock feature. My requirements for this ticking clock are: first, it should count down the time from 15 to 0. When the timer hits 0, the user loses the game; second, the timer should be displayed in the HTML file, and the time will changes while the time goes by; third, the timer should start when the game finishes playing the sound and stop when the user clicks the correct button. In addition, the timer should not stop if the user clicks the wrong button.]

   [According to the hints, I studied the setInterval() and clearInterval() function on W3School Websites and wrote "startCountdown" functions for setInterval() and clearInterval(), but the setInterval() function could only display time countdown on the console, and could not change the text inside the div element in HTML file. Then I searched on the W3School and found out that I could use "document.getElementById('idname')" to select the element from the HTML file and then use ".innerHTML" to assign a new value to the element.]

   [After solving this problem, I found out that even though the timer hit zero, it would continue to count down and this interval would not end. To prevent the time counting down infinitely, I added an if statement, which stated that if the counter was smaller than zero, then this interval would be cleared, the timer in the HTML file would display "Time's Up!", and then it would call the "loseGame" function to end this game.]

   [To achieve the third requirement, I added the "startCountdown" function at the end of the "playClueSequence" function. However, the "playClueSequence" function would start counting while the sound was playing. It was unfair for players so I set another interval for calling the "startCountdown" function after 5 seconds.]

   [Moreover, I carefully checked the "guess" function, and then I realized that I did not clear the interval when the player clicked the correct button so this endless interval problem happened. I also cleared this interval in the "stopGame" function because I wanted to end counting when this game ends. Also, I wanted to modify this function so that the programmer could easily change the amount of time in "startCountdown" function. Therefore, after modification, I can enter one argument that presents the counter time.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   [After completing my submission, I become more interested in web development and want to know more about javascript, HTML, and CSS. I have studied Javascript for basic algorithm and data structures for 3 months but I realized that there are still lots of knowledge I should know after doing this project. This project is mainly focusing on front-end web development, what is back-end web development and how is back-end web development involved in web application development? This project only requires very basic HTML and CSS design. Based on my experience of using different websites, I knew that the real website is much more complex than this project, and these websites are often well designed to fit into different screen sizes. Therefore, when should we consider the user experience design and how to design a website that is responsive and interactive? Moreover, I want to know more about web applications or website testing. For this project, I could keep running the game to test the results but for some websites, which are used to input or export information, or web applications, how can we test these websites to determine if these websites are well functional?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   [If I have more time to work on this project, I will design games to have different levels such as "easy", "regular”, "difficult", "hell" and "endless". For the "easy" level, the game should have only 4 buttons. The sounds will be really different and easy to distinguish. Users will have 20 seconds to click the button, and they will have 3 strike chances.
   For the "regular" level, the game will have 5 buttons. The sound will be really different. Users will have 15 seconds to click the right button, and they will also have 3 strike chances.
   For the "difficult" level, the game will have 8 buttons. Some of the sounds will be similar. Users will have only 10 seconds to click the button, and they will only have 1 strike chance.
   For the "hell" level, the game will have 8 buttons. The sound will be really similar and is hard to distinguish. Users only have 10 seconds to click the right button in the correct order, and they will not have a strike chance.
   For the "endless" level, the user will continuously play the game (in regular level) until they lose the game. The highest score will be displayed on the website at the end of the game.]

## License

    Copyright Huiying Wang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
