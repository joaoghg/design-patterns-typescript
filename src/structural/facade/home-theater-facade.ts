import { SmartTv } from './subsystems/smart-tv'
import { SoundSystem } from './subsystems/sound-system'
import { StreamingService } from './subsystems/streaming-service'

export class HomeTheaterFacade {
  constructor(
    private readonly tv: SmartTv,
    private readonly soundSystem: SoundSystem,
    private readonly streamingService: StreamingService
  ) {}

  watchMovie(movie: string): void {
    this.tv.turnOn()
    this.tv.setInput('HDMI 1')
    this.soundSystem.turnOn()
    this.soundSystem.setVolume(30)
    this.streamingService.connect()
    this.streamingService.play(movie)
  }
}
