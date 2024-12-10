import child_process from 'child_process'
import * as express from 'express'
import cors from 'cors'

const app = express.default()

const allowedOrigins: string[] = [
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'http://192.168.1.118:5173',
    'http://192.168.1.118:5173/'
]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) {
            callback(new Error('Missing origin'))
            return
        }
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
            return
        }
        callback(new Error('Not allowed by CORS'))
        return
    }
}))

app.get('/buzz', (req: express.Request, res: express.Response) => {
    const { userId } = req.query;
    child_process.exec(`python play_sound.py /home/amathieu/secret-house/public/${userId}.mp3`, (error, stdout) => {
        if (error) {
            console.error(`exec error: ${error}`)
            res.status(500).send('error')
            return
        }
        res.send(stdout)
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})