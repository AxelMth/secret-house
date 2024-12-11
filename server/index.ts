import child_process from 'child_process'
import * as express from 'express'
import cors from 'cors'

const app = express.default()

const allowedOrigins: string[] = [
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'http://192.168.1.118:5173',
    'http://192.168.1.118:5173/',
    'http://192.168.1.36:5173',
    'http://192.168.1.36:5173/'
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

let isPlaying = false;

app.get('/buzz', (req: express.Request, res: express.Response) => {
    if (isPlaying) {
        res.status(429).send('Another sound is currently playing')
        return
    }
    isPlaying = true;

    const { userId } = req.query;
    const play = child_process.spawn('python', [`play_sound.py`,`public/${userId}.mp3`]);
    
    play.on('close', () => {
        console.log('Sound played')
        isPlaying = false;
    })

    play.stdout.on('data', (data) => {  
        console
        .log(`stdout: ${data}`);
    })
    
    play.on('error', (err) => {
        console.error(err)
        isPlaying = false;
    })
    res.send('Sound played')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})