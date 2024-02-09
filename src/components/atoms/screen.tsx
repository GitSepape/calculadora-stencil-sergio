import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'screen-calculator',
    styleUrl: 'atoms.css',
    shadow: true,
})
export class ScreenCalculator {

    @Prop() value: string;

    render() {
        return <input class="screen" type="text" placeholder="0" value={this.value} disabled></input>
    }
}

