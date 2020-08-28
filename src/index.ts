import { Command, flags } from '@oclif/command'
import { readFileSync } from "fs"

class Spotlist extends Command {
  static description = 'kutas'
  static args = [{ name: 'schedule' }]
  // D:\McGluszak Dropbox\Maciek Gluszak\Predykcje XP\source\ramuwki org\Polsat_cennik_wrzesien_2020.xlsx
  async run() {
    const { args } = this.parse(Spotlist)

    let msgOpen: string
    let content: string
    if (args.schedule !== undefined && args.schedule !== "") {
      msgOpen = "otwieram plik: " + args.schedule
       content = readFileSync (args.schedule , "utf8")
    }
    else {
      msgOpen = "nie podałeś ścieżki chuju"
      content = ""
    }

    console.log(msgOpen)
    console.log (content)
    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from .\\src\\index.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = Spotlist
