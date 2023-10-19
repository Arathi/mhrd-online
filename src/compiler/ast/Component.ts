import Input from "./Input.ts";
import Output from "./Output.ts";
import Part from "./Part.ts";
import Wire from "./Wire.ts";

export default class Component {
  inputs: Map<string, Input>;
  ouputs: Map<string, Output>;
  parts: Map<string, Part>;
  wires: Array<Wire>;

  constructor() {
    this.inputs = new Map<string, Input>();
    this.ouputs = new Map<string, Output>();
    this.parts = new Map<string, Part>();
    this.wires = [];
  }
}