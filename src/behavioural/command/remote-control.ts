import { Command } from './command'

export class RemoteControl {
  private history: Command[] = []

  pressButton(command: Command): void {
    command.execute()
    this.history.push(command)
  }

  pressUndo(): void {
    const lastCommand = this.history.pop()

    if (!lastCommand) {
      console.log('Nenhum comando para desfazer')
      return
    }

    lastCommand.undo()
  }
}
