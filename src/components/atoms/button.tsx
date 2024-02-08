import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'button-calculator',
    styleUrl: 'atoms.css',
    shadow: true,
})

export class ButtonCalculator {

    @Prop({ mutable: true }) buttonDisplay: number;

    @Prop() symbol: string;

    @Prop() classCSS: string;

    private handleButtonClick(event: MouseEvent) {
        const button = event.target as HTMLButtonElement;
        const value = button.textContent;
        console.log(value);
    }

    render() {
        return <button class={this.classCSS} onClick={(event: MouseEvent) => this.handleButtonClick(event)}>{this.buttonDisplay}{this.symbol}</button>;
    }
}