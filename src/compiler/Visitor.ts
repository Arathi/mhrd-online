import MhdlVisitor from "../mhdl/MhdlVisitor";
import Component from "./ast/Component";
import {InputContext, OutputContext, PartContext, WireContext} from "../mhdl/MhdlParser";
import Input from "./ast/Input";
import {ParserRuleContext, RuleNode} from "antlr4";

export default class Visitor extends MhdlVisitor<Component> {
  component: Component;

  constructor() {
    super();
    this.component = new Component();
  }

  visitChildren(node: RuleNode): Component {
    if (!node) return this.component;
    return super.visitChildren(node);
  }

  visitInput(ctx: InputContext): Component {
    const pinNameCtx = ctx.inputPinName();
    const busNameCtx = ctx.inputBusName();
    if (pinNameCtx != null) {
      const pinName = pinNameCtx.getText();
      console.info(`声明输入引脚：${pinName}`);
      this.component.inputs.set(pinName, new Input());
    }
    else if (busNameCtx != null) {
      const busSizeCtx = ctx.busSize();
      const busName = busNameCtx.getText();
      const busSize = parseInt(busSizeCtx.getText());
      console.info(`声明输入总线：${busName}，宽度：${busSize}`);
      this.component.inputs.set(busName, new Input());
    }
    // console.info(`声明输入端口：${ctx.getText()}`);
    return this.component;
  }

  visitOutput(ctx: OutputContext): Component {
    console.info(`声明输出端口：${ctx.getText()}`);
    return this.component;
  }

  visitPart(ctx: PartContext): Component {
    console.info(`声明部件：${ctx.getText()}`);
    return this.component;
  }

  visitWire(ctx: WireContext): Component {
    console.info(`声明线缆：${ctx.getText()}`);
    return this.component;
  }
}