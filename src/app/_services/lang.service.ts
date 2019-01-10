import { BehaviorSubject } from 'rxjs';


export class LangSevice {
    private lang = 'ukr';
    public obsLang: BehaviorSubject<string> = new BehaviorSubject(this.lang);

    getLang() {
        return this.obsLang.getValue();
    }
    setLang(lang) {
        console.log(1);
        this.obsLang.next(lang);
        this.lang = lang;
    }
}
