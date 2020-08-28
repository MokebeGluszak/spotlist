import { Command, flags } from '@oclif/command'

class Spotlist extends Command {
  static description = 'kutas'
  static args = [{ name: 'schedule' }]

  async run() {
    const { args } = this.parse(Spotlist)
    console.log(args.schedule)
    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from .\\src\\index.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = Spotlist
