export class Controller {
    constructor() {

    }

    public showConsole(): void {
        console.log('show');
    }

    public showAlert(): void {
        alert("oiiisu");
    }

    public getForAttr(domId: string): string {
        const element = document.getElementById(domId);

        if (element) { return element.getAttribute('for') || ''; }

        return '';
    }
}
