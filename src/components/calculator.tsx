import { Component, h } from "@stencil/core";


@Component({
    tag: 'my-calculator',
    styleUrl: 'calculator.css',
    shadow: true,
})

export class MyCalculator {

    render() {
        return (
            <section class="wrapper">
                <screen-calculator></screen-calculator>
                <my-row></my-row>
            </section>
        );
    }
}