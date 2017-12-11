import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({ selector: '[appUnless]' })
export class UnlessDirective {
    private isShow: boolean = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {
    }

    @Input() set appUnless(condition: boolean) {
        if (!condition && !this.isShow) {
            this.viewContainer.createEmbeddedView(this.templateRef)
            this.isShow = true
        } else {
            this.viewContainer.clear();
            this.isShow = false
        }
    }
}