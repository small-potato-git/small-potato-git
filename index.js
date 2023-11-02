const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\

## story-x  👋
<p align="center"><img src="https://github.com/story-x/story-x/blob/main/gif/RThN0hOS2GO4M.gif" /></p>

<p align="center"><img src="https://profile-counter.glitch.me/story-x/count.svg" /></p>
</a>


## 今年汇总 ✨

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toUTCString()}

---
<p align="center">
<img align="center" src="//stats.guss.gay/api?username=story-x&show_icons=true&count_private=true&include_all_commits=true&line_height=21" alt="nH0pe's Github Stats" />
<img align="center" src="//stats.guss.gay/api/top-langs/?username=story-x&hide_langs_below=1&theme=default&line_height=27&layout=compact" />
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/story-x/story-x/output/github-contribution-grid-snake-dark.svg">
<source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/story-x/story-x/output/github-contribution-grid-snake.svg">
<img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/story-x/story-x/output/github-contribution-grid-snake.svg">
</picture>
</p>
\
`

console.log(readme)
