import { QuestionOrientation } from "./QuestionOrientation"

export interface SectionOrientation {
    id:number
    section:string,
    totalscore:number
    questions:QuestionOrientation[]

}
