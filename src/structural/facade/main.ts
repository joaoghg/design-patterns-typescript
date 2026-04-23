import { HomeTheaterFacade } from './home-theater-facade'
import { SmartTv } from './subsystems/smart-tv'
import { SoundSystem } from './subsystems/sound-system'
import { StreamingService } from './subsystems/streaming-service'

const tv = new SmartTv()
const soundSystem = new SoundSystem()
const streamingService = new StreamingService()

const homeTheater = new HomeTheaterFacade(tv, soundSystem, streamingService)
homeTheater.watchMovie('The Matrix')
