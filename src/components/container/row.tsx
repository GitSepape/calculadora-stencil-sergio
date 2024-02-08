import { Component, h } from "@stencil/core";


@Component({
    tag: 'my-row',
    styleUrl: 'row.css',
    shadow: true,
})
export class MyRow {
    render() {
        return <section>
                <div class="calc-button-row">
                    <button-calculator classCSS="calc-buttons" buttonDisplay={7}></button-calculator>
                    <button-calculator classCSS="calc-buttons" buttonDisplay={8}></button-calculator>
                    <button-calculator classCSS="calc-buttons" buttonDisplay={9}></button-calculator>
                    <button-calculator classCSS="calc-buttons" symbol="+"></button-calculator>
                </div>

                <div class="calc-button-row">
                    <button-calculator classCSS="calc-buttons" buttonDisplay={4}></button-calculator>
                    <button-calculator classCSS="calc-buttons" buttonDisplay={5}></button-calculator>
                    <button-calculator classCSS="calc-buttons" buttonDisplay={7}></button-calculator>
                    <button-calculator classCSS="calc-buttons" symbol="&minus;"></button-calculator>
                </div>

                <div class="calc-button-row">
                    <button-calculator classCSS="calc-buttons" buttonDisplay={1}></button-calculator>
                    <button-calculator classCSS="calc-buttons" buttonDisplay={2}></button-calculator>
                    <button-calculator classCSS="calc-buttons" buttonDisplay={3}></button-calculator>
                    <button-calculator classCSS="calc-buttons" symbol="&times;"></button-calculator>
                </div>

                <div class="calc-button-row">
                    <button-calculator classCSS="calc-buttons triple" buttonDisplay={0}></button-calculator>
                    <button-calculator classCSS="calc-buttons" symbol="&divide;"></button-calculator>
                </div>

                <div class="calc-button-row">
                    <button-calculator classCSS="calc-buttons" symbol="C"></button-calculator>
                    <button-calculator classCSS="calc-buttons" symbol="&larr;"></button-calculator>
                    <button-calculator classCSS="calc-buttons double" symbol="="></button-calculator>
                </div>
            </section>;
        }
}

