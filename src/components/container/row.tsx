import { Component, h } from "@stencil/core";


@Component({
    tag: 'my-row',
    styleUrl: 'container.css',
    shadow: true,
})
export class MyRow {

    render() {
        return <section class="calc-buttons-row"><slot></slot></section>;
        }
}

