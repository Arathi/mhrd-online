// Generated from D:/Workspace/undsf/mhrd-projects/mhrd-online/grammar\Mhdl.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MhdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MhdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MhdlParser.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.inputSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputSection?: (ctx: InputSectionContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.outputSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputSection?: (ctx: OutputSectionContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.partSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartSection?: (ctx: PartSectionContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.wireSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWireSection?: (ctx: WireSectionContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput?: (ctx: OutputContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.busSize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBusSize?: (ctx: BusSizeContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPart?: (ctx: PartContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.partName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartName?: (ctx: PartNameContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.partType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartType?: (ctx: PartTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.wire`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWire?: (ctx: WireContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.startPin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartPin?: (ctx: StartPinContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.startBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartBus?: (ctx: StartBusContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.targetPin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTargetPin?: (ctx: TargetPinContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.targetBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTargetBus?: (ctx: TargetBusContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.inputPin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputPin?: (ctx: InputPinContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.outputPin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputPin?: (ctx: OutputPinContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.inputBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputBus?: (ctx: InputBusContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.outputBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputBus?: (ctx: OutputBusContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.pinValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPinValue?: (ctx: PinValueContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.pinIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPinIndex?: (ctx: PinIndexContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.busIndexStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBusIndexStart?: (ctx: BusIndexStartContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.busIndexEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBusIndexEnd?: (ctx: BusIndexEndContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.inputPinName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputPinName?: (ctx: InputPinNameContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.inputBusName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputBusName?: (ctx: InputBusNameContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.outputPinName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputPinName?: (ctx: OutputPinNameContext) => Result;
	/**
	 * Visit a parse tree produced by `MhdlParser.outputBusName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputBusName?: (ctx: OutputBusNameContext) => Result;
}

