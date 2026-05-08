const cron = require("node-cron")
const fs = require("fs")

let isSahur = false

const startAutoSahur = (seo) => {
    if (isSahur) return
    isSahur = true

    cron.schedule("0 0 3 * * *", async () => {

        if (!global.autosahur) return

        try {
            const groups = await seo.groupFetchAllParticipating()
            const groupIds = Object.keys(groups)

            for (const idGc of groupIds) {
                try {
                    await seo.sendMessage(idGc, {
                        audio: {
                            url: "https://raw.githubusercontent.com/AhmadAkbarID/media/refs/heads/main/sahur.mp3"
                        },
                        mimetype: "audio/mpeg",
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                title: "Bangun Sayang Makan🤗",
                                body: "Makan Sayang Udah Aku Masakin Keburu Imsak😡!!",
                                thumbnail: fs.readFileSync("./data/image/sahur.png"),
                                renderLargerThumbnail: true
                            }
                        }
                    })

                    await new Promise(r => setTimeout(r, 4000))

                } catch (err) {
                    console.log(idGc)
                }
            }

        } catch (err) {
            console.log(err)
        }

    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    })
}

module.exports = { startAutoSahur }