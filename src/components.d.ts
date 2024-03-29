/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonCalculator {
        "classCSS": string;
        "value": string;
    }
    interface CalculatorComponent {
    }
    interface HistoryCalculator {
        "calculations": string[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyRow {
    }
    interface ScreenCalculator {
        "value": string;
    }
}
declare global {
    interface HTMLButtonCalculatorElement extends Components.ButtonCalculator, HTMLStencilElement {
    }
    var HTMLButtonCalculatorElement: {
        prototype: HTMLButtonCalculatorElement;
        new (): HTMLButtonCalculatorElement;
    };
    interface HTMLCalculatorComponentElement extends Components.CalculatorComponent, HTMLStencilElement {
    }
    var HTMLCalculatorComponentElement: {
        prototype: HTMLCalculatorComponentElement;
        new (): HTMLCalculatorComponentElement;
    };
    interface HTMLHistoryCalculatorElement extends Components.HistoryCalculator, HTMLStencilElement {
    }
    var HTMLHistoryCalculatorElement: {
        prototype: HTMLHistoryCalculatorElement;
        new (): HTMLHistoryCalculatorElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyRowElement extends Components.MyRow, HTMLStencilElement {
    }
    var HTMLMyRowElement: {
        prototype: HTMLMyRowElement;
        new (): HTMLMyRowElement;
    };
    interface HTMLScreenCalculatorElement extends Components.ScreenCalculator, HTMLStencilElement {
    }
    var HTMLScreenCalculatorElement: {
        prototype: HTMLScreenCalculatorElement;
        new (): HTMLScreenCalculatorElement;
    };
    interface HTMLElementTagNameMap {
        "button-calculator": HTMLButtonCalculatorElement;
        "calculator-component": HTMLCalculatorComponentElement;
        "history-calculator": HTMLHistoryCalculatorElement;
        "my-component": HTMLMyComponentElement;
        "my-row": HTMLMyRowElement;
        "screen-calculator": HTMLScreenCalculatorElement;
    }
}
declare namespace LocalJSX {
    interface ButtonCalculator {
        "classCSS"?: string;
        "value"?: string;
    }
    interface CalculatorComponent {
    }
    interface HistoryCalculator {
        "calculations"?: string[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyRow {
    }
    interface ScreenCalculator {
        "value"?: string;
    }
    interface IntrinsicElements {
        "button-calculator": ButtonCalculator;
        "calculator-component": CalculatorComponent;
        "history-calculator": HistoryCalculator;
        "my-component": MyComponent;
        "my-row": MyRow;
        "screen-calculator": ScreenCalculator;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-calculator": LocalJSX.ButtonCalculator & JSXBase.HTMLAttributes<HTMLButtonCalculatorElement>;
            "calculator-component": LocalJSX.CalculatorComponent & JSXBase.HTMLAttributes<HTMLCalculatorComponentElement>;
            "history-calculator": LocalJSX.HistoryCalculator & JSXBase.HTMLAttributes<HTMLHistoryCalculatorElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-row": LocalJSX.MyRow & JSXBase.HTMLAttributes<HTMLMyRowElement>;
            "screen-calculator": LocalJSX.ScreenCalculator & JSXBase.HTMLAttributes<HTMLScreenCalculatorElement>;
        }
    }
}
