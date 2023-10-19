// Generated from D:/Workspace/undsf/mhrd-projects/mhrd-online/grammar\Mhdl.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { ComponentContext } from "./MhdlParser";
import { InputSectionContext } from "./MhdlParser";
import { OutputSectionContext } from "./MhdlParser";
import { PartSectionContext } from "./MhdlParser";
import { WireSectionContext } from "./MhdlParser";
import { InputContext } from "./MhdlParser";
import { OutputContext } from "./MhdlParser";
import { BusSizeContext } from "./MhdlParser";
import { PartContext } from "./MhdlParser";
import { PartNameContext } from "./MhdlParser";
import { PartTypeContext } from "./MhdlParser";
import { WireContext } from "./MhdlParser";
import { StartPinContext } from "./MhdlParser";
import { StartBusContext } from "./MhdlParser";
import { TargetPinContext } from "./MhdlParser";
import { TargetBusContext } from "./MhdlParser";
import { InputPinContext } from "./MhdlParser";
import { OutputPinContext } from "./MhdlParser";
import { InputBusContext } from "./MhdlParser";
import { OutputBusContext } from "./MhdlParser";
import { PinValueContext } from "./MhdlParser";
import { PinIndexContext } from "./MhdlParser";
import { BusIndexStartContext } from "./MhdlParser";
import { BusIndexEndContext } from "./MhdlParser";
import { InputPinNameContext } from "./MhdlParser";
import { InputBusNameContext } from "./MhdlParser";
import { OutputPinNameContext } from "./MhdlParser";
import { OutputBusNameContext } from "./MhdlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MhdlParser`.
 */
export default class MhdlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MhdlParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.inputSection`.
	 * @param ctx the parse tree
	 */
	enterInputSection?: (ctx: InputSectionContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.inputSection`.
	 * @param ctx the parse tree
	 */
	exitInputSection?: (ctx: InputSectionContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.outputSection`.
	 * @param ctx the parse tree
	 */
	enterOutputSection?: (ctx: OutputSectionContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.outputSection`.
	 * @param ctx the parse tree
	 */
	exitOutputSection?: (ctx: OutputSectionContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.partSection`.
	 * @param ctx the parse tree
	 */
	enterPartSection?: (ctx: PartSectionContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.partSection`.
	 * @param ctx the parse tree
	 */
	exitPartSection?: (ctx: PartSectionContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.wireSection`.
	 * @param ctx the parse tree
	 */
	enterWireSection?: (ctx: WireSectionContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.wireSection`.
	 * @param ctx the parse tree
	 */
	exitWireSection?: (ctx: WireSectionContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutput?: (ctx: OutputContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutput?: (ctx: OutputContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.busSize`.
	 * @param ctx the parse tree
	 */
	enterBusSize?: (ctx: BusSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.busSize`.
	 * @param ctx the parse tree
	 */
	exitBusSize?: (ctx: BusSizeContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.part`.
	 * @param ctx the parse tree
	 */
	enterPart?: (ctx: PartContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.part`.
	 * @param ctx the parse tree
	 */
	exitPart?: (ctx: PartContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.partName`.
	 * @param ctx the parse tree
	 */
	enterPartName?: (ctx: PartNameContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.partName`.
	 * @param ctx the parse tree
	 */
	exitPartName?: (ctx: PartNameContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.partType`.
	 * @param ctx the parse tree
	 */
	enterPartType?: (ctx: PartTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.partType`.
	 * @param ctx the parse tree
	 */
	exitPartType?: (ctx: PartTypeContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.wire`.
	 * @param ctx the parse tree
	 */
	enterWire?: (ctx: WireContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.wire`.
	 * @param ctx the parse tree
	 */
	exitWire?: (ctx: WireContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.startPin`.
	 * @param ctx the parse tree
	 */
	enterStartPin?: (ctx: StartPinContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.startPin`.
	 * @param ctx the parse tree
	 */
	exitStartPin?: (ctx: StartPinContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.startBus`.
	 * @param ctx the parse tree
	 */
	enterStartBus?: (ctx: StartBusContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.startBus`.
	 * @param ctx the parse tree
	 */
	exitStartBus?: (ctx: StartBusContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.targetPin`.
	 * @param ctx the parse tree
	 */
	enterTargetPin?: (ctx: TargetPinContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.targetPin`.
	 * @param ctx the parse tree
	 */
	exitTargetPin?: (ctx: TargetPinContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.targetBus`.
	 * @param ctx the parse tree
	 */
	enterTargetBus?: (ctx: TargetBusContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.targetBus`.
	 * @param ctx the parse tree
	 */
	exitTargetBus?: (ctx: TargetBusContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.inputPin`.
	 * @param ctx the parse tree
	 */
	enterInputPin?: (ctx: InputPinContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.inputPin`.
	 * @param ctx the parse tree
	 */
	exitInputPin?: (ctx: InputPinContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.outputPin`.
	 * @param ctx the parse tree
	 */
	enterOutputPin?: (ctx: OutputPinContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.outputPin`.
	 * @param ctx the parse tree
	 */
	exitOutputPin?: (ctx: OutputPinContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.inputBus`.
	 * @param ctx the parse tree
	 */
	enterInputBus?: (ctx: InputBusContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.inputBus`.
	 * @param ctx the parse tree
	 */
	exitInputBus?: (ctx: InputBusContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.outputBus`.
	 * @param ctx the parse tree
	 */
	enterOutputBus?: (ctx: OutputBusContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.outputBus`.
	 * @param ctx the parse tree
	 */
	exitOutputBus?: (ctx: OutputBusContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.pinValue`.
	 * @param ctx the parse tree
	 */
	enterPinValue?: (ctx: PinValueContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.pinValue`.
	 * @param ctx the parse tree
	 */
	exitPinValue?: (ctx: PinValueContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.pinIndex`.
	 * @param ctx the parse tree
	 */
	enterPinIndex?: (ctx: PinIndexContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.pinIndex`.
	 * @param ctx the parse tree
	 */
	exitPinIndex?: (ctx: PinIndexContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.busIndexStart`.
	 * @param ctx the parse tree
	 */
	enterBusIndexStart?: (ctx: BusIndexStartContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.busIndexStart`.
	 * @param ctx the parse tree
	 */
	exitBusIndexStart?: (ctx: BusIndexStartContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.busIndexEnd`.
	 * @param ctx the parse tree
	 */
	enterBusIndexEnd?: (ctx: BusIndexEndContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.busIndexEnd`.
	 * @param ctx the parse tree
	 */
	exitBusIndexEnd?: (ctx: BusIndexEndContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.inputPinName`.
	 * @param ctx the parse tree
	 */
	enterInputPinName?: (ctx: InputPinNameContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.inputPinName`.
	 * @param ctx the parse tree
	 */
	exitInputPinName?: (ctx: InputPinNameContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.inputBusName`.
	 * @param ctx the parse tree
	 */
	enterInputBusName?: (ctx: InputBusNameContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.inputBusName`.
	 * @param ctx the parse tree
	 */
	exitInputBusName?: (ctx: InputBusNameContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.outputPinName`.
	 * @param ctx the parse tree
	 */
	enterOutputPinName?: (ctx: OutputPinNameContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.outputPinName`.
	 * @param ctx the parse tree
	 */
	exitOutputPinName?: (ctx: OutputPinNameContext) => void;
	/**
	 * Enter a parse tree produced by `MhdlParser.outputBusName`.
	 * @param ctx the parse tree
	 */
	enterOutputBusName?: (ctx: OutputBusNameContext) => void;
	/**
	 * Exit a parse tree produced by `MhdlParser.outputBusName`.
	 * @param ctx the parse tree
	 */
	exitOutputBusName?: (ctx: OutputBusNameContext) => void;
}

