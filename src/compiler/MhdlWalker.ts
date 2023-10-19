import MhdlListener from "../mhdl/MhdlListener";
import {InputContext, OutputContext, PartContext, WireContext} from "../mhdl/MhdlParser";

export default class MhdlWalker extends MhdlListener {
  exitInput = (ctx: InputContext) => {
    console.info(`声明输入端口：${ctx.getText()}`);
  }

  exitOutput = (ctx: OutputContext) => {
    console.info(`声明输出端口：${ctx.getText()}`);
  }

  exitPart = (ctx: PartContext) => {
    let type = ctx.partType().getText();
    let name = ctx.partName().getText();
    console.info(`声明${type}部件：${name}`);
  }

  exitWire = (ctx: WireContext) => {
    if (ctx.startPin() != null && ctx.targetPin() != null) {
      let start = ctx.startPin();
      let target = ctx.targetPin();
      console.info(`声明引脚连接：起始：${start.getText()}，目标：${target.getText()}`);
    }
    else if (ctx.startBus() != null && ctx.targetBus() != null) {
      let start = ctx.startBus();
      let target = ctx.targetBus();
      console.info(`声明总线连接：起始：${start.getText()}，目标：${target.getText()}`);
    }
  }
}