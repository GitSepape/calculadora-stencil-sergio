import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'button-calculator',
    styleUrl: 'atoms.css',
    shadow: true,
})

export class ButtonCalculator {

    @Prop() classCSS: string; //está pensado por si el día de mañana necesitamos añadir botones con distintas dimensiones

    @Prop() value: string;

    render() {
        return <button class={this.classCSS}>{this.value}</button>;
    }
}