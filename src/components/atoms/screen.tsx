import { Component, h } from "@stencil/core";

@Component({
    tag: 'screen-calculator',
    styleUrl: 'atoms.css',
    shadow: true,
})
export class ScreenCalculator {


    render() {
        return <input class="screen" type="text" placeholder="0" disabled></input>
    }
}