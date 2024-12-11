import child_process from 'child_process'
import * as express from 'express'
import cors from 'cors'

import { users} from './users.constants.js';

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

let userActions = Object.keys(users).reduce((acc, userId) => {
    acc[userId] = users[userId].actions.reduce((_acc, action) => {
        _acc[action] = false;
        return _acc
    }, {} as Record<string, boolean>)
    return acc;
}, {} as Record<string, Record<string, boolean>>)

app.post('/action', (req: express.Request, res: express.Response) => {
    const { userId, action, isDone } = req.query;
    if (!userId || !action) {
        res.status(400).send('Missing parameters')
        return
    }
    if (!users[userId as string]) {
        res.status(404).send('User not found')
        return
    }
    if (!users[userId as string].actions.includes(action as string)) {
        res.status(400).send('Invalid action')
        return
    }
    userActions[userId as string][action as string] = isDone === 'true';
    res.send(userActions[userId as string])
})

app.get('/user', (req: express.Request, res: express.Response) => {
    const { userId } = req.query;
    if (!userId) {
        res.status(400).send('Missing parameters')
        return
    }
    if (!users[userId as string]) {
        res.status(404).send('User not found')
        return
    }
    res.send({
        ...users[userId as string],
        actionsDone: userActions[userId as string]
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})