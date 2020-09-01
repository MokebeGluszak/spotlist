import { readFileSync } from "fs"
import {loadSpots} from './spot'
import { load } from '@oclif/config'


export function getFile(filePath?:string):void{
let msgOpen: string
let content: string
// content = readFileSync(filePath, "utf8")
if (filePath) {
    // let filePath_safe:string = filePath
    msgOpen = "otwieram plik: " + filePath
    content = readFileSync(filePath, "utf8")
}
else {
    msgOpen = "nie podałeś ścieżki chuju"
    content = ""
}

console.log(msgOpen)
console.log(loadSpots(content))
}