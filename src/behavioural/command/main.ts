import { LightOnCommand } from './commands/light-on-command'
import { LightOffCommand } from './commands/light-off-command'
import { Light } from './light'
import { RemoteControl } from './remote-control'

const livingRoomLight = new Light('Sala')

const lightOnCommand = new LightOnCommand(livingRoomLight)
const lightOffCommand = new LightOffCommand(livingRoomLight)

const remoteControl = new RemoteControl()

remoteControl.pressButton(lightOnCommand)
remoteControl.pressButton(lightOffCommand)
remoteControl.pressUndo()
remoteControl.pressUndo()
remoteControl.pressUndo()
