import { existsSync, mkdirSync } from "fs"

export class Fs {
    public projectPath: string

    constructor(){
        this.projectPath = `${process.cwd()}/src/presentation/docs`
    }

    async createDir(dir: string|null = null): Promise<void> {
        if(!dir) mkdirSync(this.projectPath, {recursive: true})
        else mkdirSync(`${this.projectPath}/${dir}`, {recursive: true})
    }
    
    async existDir(nameDir: string|null = null): Promise<boolean>{
        if(!nameDir) return existsSync(this.projectPath)
        else if(nameDir) return existsSync(`${this.projectPath}/${nameDir}`)
        else return false
    }

    async completeWork(nameDir: string|null = null): Promise<string>{
        const existDir = await this.existDir(nameDir)
        if (!existDir) await this.createDir(nameDir)
        return `${this.projectPath}/${nameDir}`
    }
}