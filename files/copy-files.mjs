import { fileURLToPath } from 'url'
import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { dirname } from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname_ = dirname(filename)

// Define the paths to your script file and the public folder
const scriptPath = resolve(dirname_, '..', 'files', 'cookieconsent.js')
const publicPath = resolve(dirname_, '..', '..', '..', 'public', 'cookieconsent.js')
const scriptPath2 = resolve(dirname_, '..', 'files', 'cookieconsent.json')
const publicPath2 = resolve(dirname_, '..', '..', '..', 'cookieconsent.json.change')
const scriptPath3 = resolve(dirname_, '..', 'files', 'cookieconsentaccept.js')
const publicPath3 = resolve(dirname_, '..', '..', '..', 'cookieconsentaccept.js')

// Copy the script file to the public folder
copyFileSync(scriptPath, publicPath)
copyFileSync(scriptPath2, publicPath2)
copyFileSync(scriptPath3, publicPath3)
//console.log('Script file copied to public folder')
