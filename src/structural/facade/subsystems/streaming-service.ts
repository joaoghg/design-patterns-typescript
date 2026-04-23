export class StreamingService {
  connect(): void {
    console.log('Streaming: conectando ao serviço...')
  }

  play(movie: string): void {
    console.log(`Streaming: reproduzindo "${movie}"`)
  }
}
