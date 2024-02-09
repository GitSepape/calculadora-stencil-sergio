import { Component, h, State } from "@stencil/core";

@Component({
    tag: 'calculator-component',
    styleUrl: 'calculator.css',
    shadow: true
})
export class CalculatorComponent {

    @State() calculations: string[] = [];
    @State() data: string = '';
    @State() history: boolean = false;

    private handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.data = inputElement.value;
    }

    private handleButtonClicked(event: MouseEvent) {
        const button = event.target as HTMLButtonElement;
        const value = button.textContent;

    if (!value) return;

    if (value === '=') { //Al pulsar en el botón "=" resolvemos el problema
        try {
            const result = eval(this.data);
            this.calculations = [...this.calculations, `${this.data} = ${result}`];
            this.data = result.toString();
            this.history = true;
            } catch (error) {
            this.data = 'Error';
        }
    } else if (value === 'C') { //con esto reiniciamos todo a 0 al pulsar en el botón "C"
        this.calculations = [];
        this.data = '';
        this.history = false;
    } else {
        if (this.history) {
            this.data = '';
            this.history = false;
            }
            this.data += value;
        }
    }

    render() {
    return (
        <section class="calculator-container">
            <screen-calculator class="screen-container" value={this.data} onInput={(event: Event) => this.handleInput(event)}></screen-calculator>
            <section class="buttons">
                <my-row class="calc-buttons-row">
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="7">7</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="8">8</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="9">9</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="+">+</button-calculator>
                </my-row>

                <my-row class="calc-buttons-row">
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="4">4</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="5">5</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="6">6</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="-">-</button-calculator>
                </my-row>

                <my-row class="calc-buttons-row">
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="1">1</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="2">2</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="3">3</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="x">*</button-calculator>
                </my-row>

                <my-row class="calc-buttons-row">
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons calc-buttons-reset" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="C">C</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="0">0</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="=">=</button-calculator>
                    <button-calculator class="calc-buttons-cell" classCSS="calc-buttons" onClick={(event: MouseEvent) => this.handleButtonClicked(event)} value="/">/</button-calculator>
                </my-row>
            </section>
            <history-calculator calculations={this.calculations}></history-calculator>
        </section>
    );
    }
}