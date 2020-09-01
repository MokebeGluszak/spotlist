import { Command, flags } from '@oclif/command'
import {getFile} from './openFile'
class Spotlist extends Command {
  static description = 'kutas'
  static args = [{ name: 'schedule' }]
  // C:\Users\pawel\McGluszak Dropbox\Paweł Gera\TS Szkolenie\small tm 201001 tvn.csv
  async run() {
    // const { args } = this.parse(Spotlist)
    
    const args = this.parse(Spotlist).args
    getFile(args.schedule)
    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from .\\src\\index.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = Spotlist
