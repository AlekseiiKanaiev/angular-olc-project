import { BehaviorSubject } from 'rxjs';


export class LangSevice {
    private lang = 'ukr';
    public obsLang: BehaviorSubject<string> = new BehaviorSubject(this.lang);

    // getLang(): string {
    //     return this.obsLang.getValue();
    // }
    setLang(lang: string) {
        this.obsLang.next(lang);
        this.lang = lang;
    }
}
