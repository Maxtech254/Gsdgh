const chalk = require('chalk')
const fs = require('fs')

function createProgressBar(percentage) {
    const totalBars = 20
    const filledBars = Math.round((percentage / 100) * totalBars)
    const emptyBars = totalBars - filledBars
    return `[${'█'.repeat(filledBars)}${'░'.repeat(emptyBars)}] ${percentage}%`
}

// Calculate RAM usage (Node.js process specific)
const memoryUsage = process.memoryUsage()
const ramPercentage = Math.round((memoryUsage.heapUsed / memoryUsage.heapTotal) * 100)
const ramBar = createProgressBar(ramPercentage)

const Menu = `
╔═══════════════════════
║  🤖 ${global.botname} - BOT MENU
║  👤 Owner: ${global.ownername}
║  📊 Version: ${global.botversion}
║  🔧 Type: ${global.typebot}
║  🟢 Status: Online
║  📍 Prefix: ${global.prefix}
║  🖥️ RAM Usage: ${ramBar}
╚═══════════════════════

╭─ 🚀 MAIN COMMANDS ───────────
│ • menu       - Show this menu
│ • ping       - Check bot speed
│ • uptime     - Bot running time
│ • botinfo    - Bot information
│ • listplugin - List all plugins
│ • update     - Update bot
│ • request    - Request feature
│ • donate     - Support the bot
│ • speedtest  - Test internet speed
╰──────────────────────────────

╭─ ⚙️ BOT CONTROL ─────────────
│ • public/private    - Toggle mode
│ • add/delaccess    - Manage access
│ • autoreact        - Auto reactions
│ • block            - Block user
│ • autotyping       - Auto typing
│ • autobio          - Auto bio
│ • setprefix        - Change prefix
│ • autostatusview   - View status
│ • onlygc/onlypc    - Restrict mode
│ • maintenance      - Maintenance mode
│ • backup           - Backup data
│ • restart          - Restart bot
╰──────────────────────────────

╭─ 📱 MEDIA DOWNLOAD ─────────
│ • play/playdoc     - Play audio
│ • ytmp4/ytvid      - YouTube video
│ • ytmp3/song       - YouTube audio
│ • tiktok/tt        - TikTok download
│ • igdl            - Instagram DL
│ • twitterdl       - Twitter download
│ • pinterestdl     - Pinterest DL
│ • spotify         - Spotify download
│ • facebookdl      - Facebook video
│ • rmdl            - Rumble download
╰──────────────────────────────

╭─ 🤖 AI COMMANDS ────────────
│ • gemma     - Gemma AI
│ • copilot   - AI Assistant
│ • gpt4      - GPT-4 Chat
│ • dalle     - AI Image Generation
│ • bard      - Google Bard AI
│ • aivoice   - AI Voice Assistant
│ • summarize - Text summarization
╰──────────────────────────────

╭─ 📥 GET COMMANDS ───────────
│ • gethtml   - Get HTML
│ • getpp     - Get profile picture
│ • getplugin - Get plugin
│ • save      - Save file
│ • gitclone  - Clone repository
│ • weather   - Weather info
│ • shorturl  - Shorten URL
│ • qrread    - Read QR code
│ • qrcreate  - Create QR code
│ • stock     - Stock market info
╰──────────────────────────────

╭─ 👥 GROUP COMMANDS ────────
│ • add/remove    - Manage members
│ • promote/revoke - Admin control
│ • approve/reject - Join requests
│ • antilink      - Anti-link
│ • tagall/hidetag - Tag members
│ • close/open    - Group settings
│ • linkgc        - Group link
│ • setppgc       - Set group picture
│ • setdesc       - Set description
│ • welcome/goodbye - Greetings
│ • warn/unwarn   - Warning system
│ • simsimi       - Chat bot in group
│ • level         - Check user level
│ • leaderboard   - Group rankings
╰──────────────────────────────

╭─ 🛠️ TOOLS & UTILITIES ──────
│ • enc    - Encrypt text
│ • idch   - ID change
│ • dev    - Developer tools
│ • calc   - Calculator
│ • currency - Currency converter
│ • timer  - Set timer
│ • reminder - Set reminder
│ • notes  - Personal notes
│ • poll   - Create poll
│ • vote   - Voting system
╰──────────────────────────────

╭─ 🎨 EPHOTO EFFECTS ────────
│ • glithtext       - Glitch text
│ • writetext       - Text writing
│ • typographytext  - Typography
│ • neon/glow       - Neon effects
│ • gradienttext    - Gradient text
│ • luxurygold      - Gold text
│ • cartoonstyle    - Cartoon style
│ • watercolor      - Watercolor
│ • logomaker       - Logo creation
│ • galaxywallpaper - Galaxy themes
│ • freecreate      - Free creation
│ • animefilter     - Anime style
│ • vaporwave       - Vaporwave aesthetic
│ • cyberpunk       - Cyberpunk style
│ • retro           - Retro effects
╰──────────────────────────────

╭─ 😄 FUN & REACTIONS ───────
│ • truth/dare     - Truth or dare
│ • hug/kiss       - Interactions
│ • slap/poke      - Fun actions
│ • dance/cringe   - Expressions
│ • 8ball          - Magic 8 ball
│ • avatar         - Get avatar
│ • animal sounds  - Meow/woof
│ • meme           - Random memes
│ • joke           - Tell jokes
│ • fact           - Random facts
│ • quote          - Inspirational quotes
│ • rps            - Rock Paper Scissors
│ • coinflip       - Flip a coin
│ • dice           - Roll dice
╰──────────────────────────────

╭─ 🎮 GAMES ──────────────────
│ • guessnumber    - Number guessing
│ • wordchain      - Word chain game
│ • trivia         - Trivia questions
│ • hangman        - Hangman game
│ • tictactoe      - Tic Tac Toe
│ • chess          - Chess game
│ • slot           - Slot machine
│ • fishing        - Fishing game
│ • battle         - Battle game
│ • racing         - Racing game
╰──────────────────────────────

╭─ ⚽ SPORTS & LEAGUES ───────
│ • epl        - English Premier League
│ • laliga     - La Liga
│ • serie-a    - Serie A
│ • ligue-1    - Ligue 1
│ • bundesliga - Bundesliga
│ • nba        - NBA Basketball
│ • nfl        - NFL Football
│ • f1         - Formula 1
│ • cricket    - Cricket updates
│ • tennis     - Tennis scores
╰──────────────────────────────

╭─ 🔐 SECURITY & MODERATION ─
│ • antispam    - Anti-spam protection
│ • antibot     - Block bots
│ • filter      - Word filter
│ • log         - Activity logs
│ • report      - Report user
│ • blacklist   - Blacklist management
│ • whitelist   - Whitelist users
╰──────────────────────────────

╭─ 📊 STATISTICS ────────────
│ • stats      - Bot statistics
│ • userinfo   - User information
│ • groupinfo  - Group information
│ • rank       - User rank
│ • achievements - User achievements
│ • usage      - Command usage stats
╰──────────────────────────────

╭─ 🌐 WEB & SEARCH ──────────
│ • google     - Google search
│ • youtube    - YouTube search
│ • wikipedia  - Wikipedia search
│ • news       - Latest news
│ • translate  - Language translation
│ • dictionary - Word definitions
│ • urban      - Urban dictionary
│ • imdb       - Movie information
╰──────────────────────────────

> 🚀 Powered by MaxTech
> 💻 Advanced WhatsApp Bot
> 📅 Last Updated: ${new Date().toLocaleDateString()}
> 🔗 Type "${global.prefix}help <command>" for details
`

module.exports = Menu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
