import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'history-calculator',
    styleUrl: 'container.css',
    shadow: true,
})
export class HistoryCalculator {

    @Prop() calculations: string[];

    render() {
        return (
            <section>
                <h3>Historial de cálculos:</h3>
                    <ul>
                    {this.calculations.map(calculation => (
                        <li>{calculation}</li>
                    ))}
                    </ul>
            </section>
        );
    }
}