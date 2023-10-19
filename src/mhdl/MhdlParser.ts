// Generated from D:/Workspace/undsf/mhrd-projects/mhrd-online/grammar\Mhdl.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MhdlListener from "./MhdlListener.js";
import MhdlVisitor from "./MhdlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MhdlParser extends Parser {
	public static readonly PART_TYPE = 1;
	public static readonly NAME = 2;
	public static readonly NUMBER = 3;
	public static readonly INPUTS = 4;
	public static readonly OUTPUTS = 5;
	public static readonly PARTS = 6;
	public static readonly WIRES = 7;
	public static readonly CM = 8;
	public static readonly SC = 9;
	public static readonly DT = 10;
	public static readonly CL = 11;
	public static readonly BL = 12;
	public static readonly BR = 13;
	public static readonly TO = 14;
	public static readonly COMMENT = 15;
	public static readonly WS = 16;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_component = 0;
	public static readonly RULE_inputSection = 1;
	public static readonly RULE_outputSection = 2;
	public static readonly RULE_partSection = 3;
	public static readonly RULE_wireSection = 4;
	public static readonly RULE_input = 5;
	public static readonly RULE_output = 6;
	public static readonly RULE_busSize = 7;
	public static readonly RULE_part = 8;
	public static readonly RULE_partName = 9;
	public static readonly RULE_partType = 10;
	public static readonly RULE_wire = 11;
	public static readonly RULE_startPin = 12;
	public static readonly RULE_startBus = 13;
	public static readonly RULE_targetPin = 14;
	public static readonly RULE_targetBus = 15;
	public static readonly RULE_inputPin = 16;
	public static readonly RULE_outputPin = 17;
	public static readonly RULE_inputBus = 18;
	public static readonly RULE_outputBus = 19;
	public static readonly RULE_pinValue = 20;
	public static readonly RULE_pinIndex = 21;
	public static readonly RULE_busIndexStart = 22;
	public static readonly RULE_busIndexEnd = 23;
	public static readonly RULE_inputPinName = 24;
	public static readonly RULE_inputBusName = 25;
	public static readonly RULE_outputPinName = 26;
	public static readonly RULE_outputBusName = 27;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'Inputs:'", 
                                                            "'Outputs:'", 
                                                            "'Parts:'", 
                                                            "'Wires:'", 
                                                            "','", "';'", 
                                                            "'.'", "':'", 
                                                            "'['", "']'", 
                                                            "'->'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "PART_TYPE", 
                                                             "NAME", "NUMBER", 
                                                             "INPUTS", "OUTPUTS", 
                                                             "PARTS", "WIRES", 
                                                             "CM", "SC", 
                                                             "DT", "CL", 
                                                             "BL", "BR", 
                                                             "TO", "COMMENT", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"component", "inputSection", "outputSection", "partSection", "wireSection", 
		"input", "output", "busSize", "part", "partName", "partType", "wire", 
		"startPin", "startBus", "targetPin", "targetBus", "inputPin", "outputPin", 
		"inputBus", "outputBus", "pinValue", "pinIndex", "busIndexStart", "busIndexEnd", 
		"inputPinName", "inputBusName", "outputPinName", "outputBusName",
	];
	public get grammarFileName(): string { return "Mhdl.g4"; }
	public get literalNames(): (string | null)[] { return MhdlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MhdlParser.symbolicNames; }
	public get ruleNames(): string[] { return MhdlParser.ruleNames; }
	public get serializedATN(): number[] { return MhdlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MhdlParser._ATN, MhdlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public component(): ComponentContext {
		let localctx: ComponentContext = new ComponentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MhdlParser.RULE_component);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.inputSection();
			this.state = 57;
			this.outputSection();
			this.state = 58;
			this.partSection();
			this.state = 59;
			this.wireSection();
			this.state = 60;
			this.match(MhdlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputSection(): InputSectionContext {
		let localctx: InputSectionContext = new InputSectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MhdlParser.RULE_inputSection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.match(MhdlParser.INPUTS);
			this.state = 63;
			this.input();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 64;
				this.match(MhdlParser.CM);
				this.state = 65;
				this.input();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(MhdlParser.SC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputSection(): OutputSectionContext {
		let localctx: OutputSectionContext = new OutputSectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MhdlParser.RULE_outputSection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.match(MhdlParser.OUTPUTS);
			this.state = 74;
			this.output();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 75;
				this.match(MhdlParser.CM);
				this.state = 76;
				this.output();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(MhdlParser.SC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partSection(): PartSectionContext {
		let localctx: PartSectionContext = new PartSectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MhdlParser.RULE_partSection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(MhdlParser.PARTS);
			this.state = 85;
			this.part();
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 86;
				this.match(MhdlParser.CM);
				this.state = 87;
				this.part();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this.match(MhdlParser.SC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wireSection(): WireSectionContext {
		let localctx: WireSectionContext = new WireSectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MhdlParser.RULE_wireSection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.match(MhdlParser.WIRES);
			this.state = 96;
			this.wire();
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 97;
				this.match(MhdlParser.CM);
				this.state = 98;
				this.wire();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.match(MhdlParser.SC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let localctx: InputContext = new InputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MhdlParser.RULE_input);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 106;
				this.inputPinName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 107;
				this.inputBusName();
				this.state = 108;
				this.match(MhdlParser.BL);
				this.state = 109;
				this.busSize();
				this.state = 110;
				this.match(MhdlParser.BR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public output(): OutputContext {
		let localctx: OutputContext = new OutputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MhdlParser.RULE_output);
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 114;
				this.outputPinName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 115;
				this.outputBusName();
				this.state = 116;
				this.match(MhdlParser.BL);
				this.state = 117;
				this.busSize();
				this.state = 118;
				this.match(MhdlParser.BR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public busSize(): BusSizeContext {
		let localctx: BusSizeContext = new BusSizeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MhdlParser.RULE_busSize);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.match(MhdlParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public part(): PartContext {
		let localctx: PartContext = new PartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MhdlParser.RULE_part);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this.partName();
			this.state = 125;
			this.partType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partName(): PartNameContext {
		let localctx: PartNameContext = new PartNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MhdlParser.RULE_partName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this.match(MhdlParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partType(): PartTypeContext {
		let localctx: PartTypeContext = new PartTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MhdlParser.RULE_partType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.match(MhdlParser.PART_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wire(): WireContext {
		let localctx: WireContext = new WireContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MhdlParser.RULE_wire);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 131;
				this.startPin();
				this.state = 132;
				this.match(MhdlParser.TO);
				this.state = 133;
				this.targetPin();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 135;
				this.startBus();
				this.state = 136;
				this.match(MhdlParser.TO);
				this.state = 137;
				this.targetBus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startPin(): StartPinContext {
		let localctx: StartPinContext = new StartPinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MhdlParser.RULE_startPin);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 141;
				this.pinValue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 142;
				this.inputPin();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 143;
				this.partName();
				this.state = 144;
				this.match(MhdlParser.DT);
				this.state = 145;
				this.outputPin();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startBus(): StartBusContext {
		let localctx: StartBusContext = new StartBusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MhdlParser.RULE_startBus);
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 149;
				this.inputBus();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 150;
				this.partName();
				this.state = 151;
				this.match(MhdlParser.DT);
				this.state = 152;
				this.outputBus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public targetPin(): TargetPinContext {
		let localctx: TargetPinContext = new TargetPinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MhdlParser.RULE_targetPin);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 156;
				this.outputPin();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 157;
				this.partName();
				this.state = 158;
				this.match(MhdlParser.DT);
				this.state = 159;
				this.inputPin();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public targetBus(): TargetBusContext {
		let localctx: TargetBusContext = new TargetBusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MhdlParser.RULE_targetBus);
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 163;
				this.outputBus();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 164;
				this.partName();
				this.state = 165;
				this.match(MhdlParser.DT);
				this.state = 166;
				this.inputBus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputPin(): InputPinContext {
		let localctx: InputPinContext = new InputPinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MhdlParser.RULE_inputPin);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 170;
				this.inputPinName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 171;
				this.inputBusName();
				this.state = 172;
				this.match(MhdlParser.BL);
				this.state = 173;
				this.pinIndex();
				this.state = 174;
				this.match(MhdlParser.BR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputPin(): OutputPinContext {
		let localctx: OutputPinContext = new OutputPinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MhdlParser.RULE_outputPin);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 178;
				this.outputPinName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 179;
				this.outputBusName();
				this.state = 180;
				this.match(MhdlParser.BL);
				this.state = 181;
				this.pinIndex();
				this.state = 182;
				this.match(MhdlParser.BR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputBus(): InputBusContext {
		let localctx: InputBusContext = new InputBusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MhdlParser.RULE_inputBus);
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 186;
				this.inputBusName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 187;
				this.inputBusName();
				this.state = 188;
				this.match(MhdlParser.BL);
				this.state = 189;
				this.busIndexStart();
				this.state = 190;
				this.match(MhdlParser.CL);
				this.state = 191;
				this.busIndexEnd();
				this.state = 192;
				this.match(MhdlParser.BR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputBus(): OutputBusContext {
		let localctx: OutputBusContext = new OutputBusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MhdlParser.RULE_outputBus);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 196;
				this.outputBusName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 197;
				this.outputBusName();
				this.state = 198;
				this.match(MhdlParser.BL);
				this.state = 199;
				this.busIndexStart();
				this.state = 200;
				this.match(MhdlParser.CL);
				this.state = 201;
				this.busIndexEnd();
				this.state = 202;
				this.match(MhdlParser.BR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pinValue(): PinValueContext {
		let localctx: PinValueContext = new PinValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MhdlParser.RULE_pinValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this.match(MhdlParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pinIndex(): PinIndexContext {
		let localctx: PinIndexContext = new PinIndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MhdlParser.RULE_pinIndex);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.match(MhdlParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public busIndexStart(): BusIndexStartContext {
		let localctx: BusIndexStartContext = new BusIndexStartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MhdlParser.RULE_busIndexStart);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(MhdlParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public busIndexEnd(): BusIndexEndContext {
		let localctx: BusIndexEndContext = new BusIndexEndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, MhdlParser.RULE_busIndexEnd);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.match(MhdlParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputPinName(): InputPinNameContext {
		let localctx: InputPinNameContext = new InputPinNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, MhdlParser.RULE_inputPinName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 214;
			this.match(MhdlParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inputBusName(): InputBusNameContext {
		let localctx: InputBusNameContext = new InputBusNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, MhdlParser.RULE_inputBusName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.match(MhdlParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputPinName(): OutputPinNameContext {
		let localctx: OutputPinNameContext = new OutputPinNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, MhdlParser.RULE_outputPinName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.match(MhdlParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputBusName(): OutputBusNameContext {
		let localctx: OutputBusNameContext = new OutputBusNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MhdlParser.RULE_outputBusName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 220;
			this.match(MhdlParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,16,223,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
	1,5,1,67,8,1,10,1,12,1,70,9,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,78,8,2,10,2,12,
	2,81,9,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,89,8,3,10,3,12,3,92,9,3,1,3,1,3,1,
	4,1,4,1,4,1,4,5,4,100,8,4,10,4,12,4,103,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
	1,5,3,5,113,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,121,8,6,1,7,1,7,1,8,1,8,1,8,
	1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,140,8,11,
	1,12,1,12,1,12,1,12,1,12,1,12,3,12,148,8,12,1,13,1,13,1,13,1,13,1,13,3,
	13,155,8,13,1,14,1,14,1,14,1,14,1,14,3,14,162,8,14,1,15,1,15,1,15,1,15,
	1,15,3,15,169,8,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,177,8,16,1,17,1,17,
	1,17,1,17,1,17,1,17,3,17,185,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
	18,3,18,195,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,205,8,19,
	1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,
	27,1,27,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,0,0,210,0,56,1,0,0,0,2,62,1,0,0,0,4,73,1,0,0,
	0,6,84,1,0,0,0,8,95,1,0,0,0,10,112,1,0,0,0,12,120,1,0,0,0,14,122,1,0,0,
	0,16,124,1,0,0,0,18,127,1,0,0,0,20,129,1,0,0,0,22,139,1,0,0,0,24,147,1,
	0,0,0,26,154,1,0,0,0,28,161,1,0,0,0,30,168,1,0,0,0,32,176,1,0,0,0,34,184,
	1,0,0,0,36,194,1,0,0,0,38,204,1,0,0,0,40,206,1,0,0,0,42,208,1,0,0,0,44,
	210,1,0,0,0,46,212,1,0,0,0,48,214,1,0,0,0,50,216,1,0,0,0,52,218,1,0,0,0,
	54,220,1,0,0,0,56,57,3,2,1,0,57,58,3,4,2,0,58,59,3,6,3,0,59,60,3,8,4,0,
	60,61,5,0,0,1,61,1,1,0,0,0,62,63,5,4,0,0,63,68,3,10,5,0,64,65,5,8,0,0,65,
	67,3,10,5,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,
	71,1,0,0,0,70,68,1,0,0,0,71,72,5,9,0,0,72,3,1,0,0,0,73,74,5,5,0,0,74,79,
	3,12,6,0,75,76,5,8,0,0,76,78,3,12,6,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,
	1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,83,5,9,0,0,83,5,1,
	0,0,0,84,85,5,6,0,0,85,90,3,16,8,0,86,87,5,8,0,0,87,89,3,16,8,0,88,86,1,
	0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,90,1,0,
	0,0,93,94,5,9,0,0,94,7,1,0,0,0,95,96,5,7,0,0,96,101,3,22,11,0,97,98,5,8,
	0,0,98,100,3,22,11,0,99,97,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,
	1,0,0,0,102,104,1,0,0,0,103,101,1,0,0,0,104,105,5,9,0,0,105,9,1,0,0,0,106,
	113,3,48,24,0,107,108,3,50,25,0,108,109,5,12,0,0,109,110,3,14,7,0,110,111,
	5,13,0,0,111,113,1,0,0,0,112,106,1,0,0,0,112,107,1,0,0,0,113,11,1,0,0,0,
	114,121,3,52,26,0,115,116,3,54,27,0,116,117,5,12,0,0,117,118,3,14,7,0,118,
	119,5,13,0,0,119,121,1,0,0,0,120,114,1,0,0,0,120,115,1,0,0,0,121,13,1,0,
	0,0,122,123,5,3,0,0,123,15,1,0,0,0,124,125,3,18,9,0,125,126,3,20,10,0,126,
	17,1,0,0,0,127,128,5,2,0,0,128,19,1,0,0,0,129,130,5,1,0,0,130,21,1,0,0,
	0,131,132,3,24,12,0,132,133,5,14,0,0,133,134,3,28,14,0,134,140,1,0,0,0,
	135,136,3,26,13,0,136,137,5,14,0,0,137,138,3,30,15,0,138,140,1,0,0,0,139,
	131,1,0,0,0,139,135,1,0,0,0,140,23,1,0,0,0,141,148,3,40,20,0,142,148,3,
	32,16,0,143,144,3,18,9,0,144,145,5,10,0,0,145,146,3,34,17,0,146,148,1,0,
	0,0,147,141,1,0,0,0,147,142,1,0,0,0,147,143,1,0,0,0,148,25,1,0,0,0,149,
	155,3,36,18,0,150,151,3,18,9,0,151,152,5,10,0,0,152,153,3,38,19,0,153,155,
	1,0,0,0,154,149,1,0,0,0,154,150,1,0,0,0,155,27,1,0,0,0,156,162,3,34,17,
	0,157,158,3,18,9,0,158,159,5,10,0,0,159,160,3,32,16,0,160,162,1,0,0,0,161,
	156,1,0,0,0,161,157,1,0,0,0,162,29,1,0,0,0,163,169,3,38,19,0,164,165,3,
	18,9,0,165,166,5,10,0,0,166,167,3,36,18,0,167,169,1,0,0,0,168,163,1,0,0,
	0,168,164,1,0,0,0,169,31,1,0,0,0,170,177,3,48,24,0,171,172,3,50,25,0,172,
	173,5,12,0,0,173,174,3,42,21,0,174,175,5,13,0,0,175,177,1,0,0,0,176,170,
	1,0,0,0,176,171,1,0,0,0,177,33,1,0,0,0,178,185,3,52,26,0,179,180,3,54,27,
	0,180,181,5,12,0,0,181,182,3,42,21,0,182,183,5,13,0,0,183,185,1,0,0,0,184,
	178,1,0,0,0,184,179,1,0,0,0,185,35,1,0,0,0,186,195,3,50,25,0,187,188,3,
	50,25,0,188,189,5,12,0,0,189,190,3,44,22,0,190,191,5,11,0,0,191,192,3,46,
	23,0,192,193,5,13,0,0,193,195,1,0,0,0,194,186,1,0,0,0,194,187,1,0,0,0,195,
	37,1,0,0,0,196,205,3,54,27,0,197,198,3,54,27,0,198,199,5,12,0,0,199,200,
	3,44,22,0,200,201,5,11,0,0,201,202,3,46,23,0,202,203,5,13,0,0,203,205,1,
	0,0,0,204,196,1,0,0,0,204,197,1,0,0,0,205,39,1,0,0,0,206,207,5,3,0,0,207,
	41,1,0,0,0,208,209,5,3,0,0,209,43,1,0,0,0,210,211,5,3,0,0,211,45,1,0,0,
	0,212,213,5,3,0,0,213,47,1,0,0,0,214,215,5,2,0,0,215,49,1,0,0,0,216,217,
	5,2,0,0,217,51,1,0,0,0,218,219,5,2,0,0,219,53,1,0,0,0,220,221,5,2,0,0,221,
	55,1,0,0,0,15,68,79,90,101,112,120,139,147,154,161,168,176,184,194,204];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MhdlParser.__ATN) {
			MhdlParser.__ATN = new ATNDeserializer().deserialize(MhdlParser._serializedATN);
		}

		return MhdlParser.__ATN;
	}


	static DecisionsToDFA = MhdlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ComponentContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputSection(): InputSectionContext {
		return this.getTypedRuleContext(InputSectionContext, 0) as InputSectionContext;
	}
	public outputSection(): OutputSectionContext {
		return this.getTypedRuleContext(OutputSectionContext, 0) as OutputSectionContext;
	}
	public partSection(): PartSectionContext {
		return this.getTypedRuleContext(PartSectionContext, 0) as PartSectionContext;
	}
	public wireSection(): WireSectionContext {
		return this.getTypedRuleContext(WireSectionContext, 0) as WireSectionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(MhdlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_component;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterComponent) {
	 		listener.enterComponent(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitComponent) {
	 		listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputSectionContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUTS(): TerminalNode {
		return this.getToken(MhdlParser.INPUTS, 0);
	}
	public input_list(): InputContext[] {
		return this.getTypedRuleContexts(InputContext) as InputContext[];
	}
	public input(i: number): InputContext {
		return this.getTypedRuleContext(InputContext, i) as InputContext;
	}
	public SC(): TerminalNode {
		return this.getToken(MhdlParser.SC, 0);
	}
	public CM_list(): TerminalNode[] {
	    	return this.getTokens(MhdlParser.CM);
	}
	public CM(i: number): TerminalNode {
		return this.getToken(MhdlParser.CM, i);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_inputSection;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterInputSection) {
	 		listener.enterInputSection(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitInputSection) {
	 		listener.exitInputSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitInputSection) {
			return visitor.visitInputSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputSectionContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OUTPUTS(): TerminalNode {
		return this.getToken(MhdlParser.OUTPUTS, 0);
	}
	public output_list(): OutputContext[] {
		return this.getTypedRuleContexts(OutputContext) as OutputContext[];
	}
	public output(i: number): OutputContext {
		return this.getTypedRuleContext(OutputContext, i) as OutputContext;
	}
	public SC(): TerminalNode {
		return this.getToken(MhdlParser.SC, 0);
	}
	public CM_list(): TerminalNode[] {
	    	return this.getTokens(MhdlParser.CM);
	}
	public CM(i: number): TerminalNode {
		return this.getToken(MhdlParser.CM, i);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_outputSection;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterOutputSection) {
	 		listener.enterOutputSection(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitOutputSection) {
	 		listener.exitOutputSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitOutputSection) {
			return visitor.visitOutputSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartSectionContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTS(): TerminalNode {
		return this.getToken(MhdlParser.PARTS, 0);
	}
	public part_list(): PartContext[] {
		return this.getTypedRuleContexts(PartContext) as PartContext[];
	}
	public part(i: number): PartContext {
		return this.getTypedRuleContext(PartContext, i) as PartContext;
	}
	public SC(): TerminalNode {
		return this.getToken(MhdlParser.SC, 0);
	}
	public CM_list(): TerminalNode[] {
	    	return this.getTokens(MhdlParser.CM);
	}
	public CM(i: number): TerminalNode {
		return this.getToken(MhdlParser.CM, i);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_partSection;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterPartSection) {
	 		listener.enterPartSection(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitPartSection) {
	 		listener.exitPartSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitPartSection) {
			return visitor.visitPartSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WireSectionContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WIRES(): TerminalNode {
		return this.getToken(MhdlParser.WIRES, 0);
	}
	public wire_list(): WireContext[] {
		return this.getTypedRuleContexts(WireContext) as WireContext[];
	}
	public wire(i: number): WireContext {
		return this.getTypedRuleContext(WireContext, i) as WireContext;
	}
	public SC(): TerminalNode {
		return this.getToken(MhdlParser.SC, 0);
	}
	public CM_list(): TerminalNode[] {
	    	return this.getTokens(MhdlParser.CM);
	}
	public CM(i: number): TerminalNode {
		return this.getToken(MhdlParser.CM, i);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_wireSection;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterWireSection) {
	 		listener.enterWireSection(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitWireSection) {
	 		listener.exitWireSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitWireSection) {
			return visitor.visitWireSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputPinName(): InputPinNameContext {
		return this.getTypedRuleContext(InputPinNameContext, 0) as InputPinNameContext;
	}
	public inputBusName(): InputBusNameContext {
		return this.getTypedRuleContext(InputBusNameContext, 0) as InputBusNameContext;
	}
	public BL(): TerminalNode {
		return this.getToken(MhdlParser.BL, 0);
	}
	public busSize(): BusSizeContext {
		return this.getTypedRuleContext(BusSizeContext, 0) as BusSizeContext;
	}
	public BR(): TerminalNode {
		return this.getToken(MhdlParser.BR, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_input;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterInput) {
	 		listener.enterInput(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitInput) {
	 		listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputPinName(): OutputPinNameContext {
		return this.getTypedRuleContext(OutputPinNameContext, 0) as OutputPinNameContext;
	}
	public outputBusName(): OutputBusNameContext {
		return this.getTypedRuleContext(OutputBusNameContext, 0) as OutputBusNameContext;
	}
	public BL(): TerminalNode {
		return this.getToken(MhdlParser.BL, 0);
	}
	public busSize(): BusSizeContext {
		return this.getTypedRuleContext(BusSizeContext, 0) as BusSizeContext;
	}
	public BR(): TerminalNode {
		return this.getToken(MhdlParser.BR, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_output;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterOutput) {
	 		listener.enterOutput(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitOutput) {
	 		listener.exitOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitOutput) {
			return visitor.visitOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BusSizeContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MhdlParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_busSize;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterBusSize) {
	 		listener.enterBusSize(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitBusSize) {
	 		listener.exitBusSize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitBusSize) {
			return visitor.visitBusSize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public partName(): PartNameContext {
		return this.getTypedRuleContext(PartNameContext, 0) as PartNameContext;
	}
	public partType(): PartTypeContext {
		return this.getTypedRuleContext(PartTypeContext, 0) as PartTypeContext;
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_part;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterPart) {
	 		listener.enterPart(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitPart) {
	 		listener.exitPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitPart) {
			return visitor.visitPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartNameContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(MhdlParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_partName;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterPartName) {
	 		listener.enterPartName(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitPartName) {
	 		listener.exitPartName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitPartName) {
			return visitor.visitPartName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartTypeContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PART_TYPE(): TerminalNode {
		return this.getToken(MhdlParser.PART_TYPE, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_partType;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterPartType) {
	 		listener.enterPartType(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitPartType) {
	 		listener.exitPartType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitPartType) {
			return visitor.visitPartType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WireContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public startPin(): StartPinContext {
		return this.getTypedRuleContext(StartPinContext, 0) as StartPinContext;
	}
	public TO(): TerminalNode {
		return this.getToken(MhdlParser.TO, 0);
	}
	public targetPin(): TargetPinContext {
		return this.getTypedRuleContext(TargetPinContext, 0) as TargetPinContext;
	}
	public startBus(): StartBusContext {
		return this.getTypedRuleContext(StartBusContext, 0) as StartBusContext;
	}
	public targetBus(): TargetBusContext {
		return this.getTypedRuleContext(TargetBusContext, 0) as TargetBusContext;
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_wire;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterWire) {
	 		listener.enterWire(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitWire) {
	 		listener.exitWire(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitWire) {
			return visitor.visitWire(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartPinContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pinValue(): PinValueContext {
		return this.getTypedRuleContext(PinValueContext, 0) as PinValueContext;
	}
	public inputPin(): InputPinContext {
		return this.getTypedRuleContext(InputPinContext, 0) as InputPinContext;
	}
	public partName(): PartNameContext {
		return this.getTypedRuleContext(PartNameContext, 0) as PartNameContext;
	}
	public DT(): TerminalNode {
		return this.getToken(MhdlParser.DT, 0);
	}
	public outputPin(): OutputPinContext {
		return this.getTypedRuleContext(OutputPinContext, 0) as OutputPinContext;
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_startPin;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterStartPin) {
	 		listener.enterStartPin(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitStartPin) {
	 		listener.exitStartPin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitStartPin) {
			return visitor.visitStartPin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartBusContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputBus(): InputBusContext {
		return this.getTypedRuleContext(InputBusContext, 0) as InputBusContext;
	}
	public partName(): PartNameContext {
		return this.getTypedRuleContext(PartNameContext, 0) as PartNameContext;
	}
	public DT(): TerminalNode {
		return this.getToken(MhdlParser.DT, 0);
	}
	public outputBus(): OutputBusContext {
		return this.getTypedRuleContext(OutputBusContext, 0) as OutputBusContext;
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_startBus;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterStartBus) {
	 		listener.enterStartBus(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitStartBus) {
	 		listener.exitStartBus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitStartBus) {
			return visitor.visitStartBus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TargetPinContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputPin(): OutputPinContext {
		return this.getTypedRuleContext(OutputPinContext, 0) as OutputPinContext;
	}
	public partName(): PartNameContext {
		return this.getTypedRuleContext(PartNameContext, 0) as PartNameContext;
	}
	public DT(): TerminalNode {
		return this.getToken(MhdlParser.DT, 0);
	}
	public inputPin(): InputPinContext {
		return this.getTypedRuleContext(InputPinContext, 0) as InputPinContext;
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_targetPin;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterTargetPin) {
	 		listener.enterTargetPin(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitTargetPin) {
	 		listener.exitTargetPin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitTargetPin) {
			return visitor.visitTargetPin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TargetBusContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputBus(): OutputBusContext {
		return this.getTypedRuleContext(OutputBusContext, 0) as OutputBusContext;
	}
	public partName(): PartNameContext {
		return this.getTypedRuleContext(PartNameContext, 0) as PartNameContext;
	}
	public DT(): TerminalNode {
		return this.getToken(MhdlParser.DT, 0);
	}
	public inputBus(): InputBusContext {
		return this.getTypedRuleContext(InputBusContext, 0) as InputBusContext;
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_targetBus;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterTargetBus) {
	 		listener.enterTargetBus(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitTargetBus) {
	 		listener.exitTargetBus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitTargetBus) {
			return visitor.visitTargetBus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputPinContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputPinName(): InputPinNameContext {
		return this.getTypedRuleContext(InputPinNameContext, 0) as InputPinNameContext;
	}
	public inputBusName(): InputBusNameContext {
		return this.getTypedRuleContext(InputBusNameContext, 0) as InputBusNameContext;
	}
	public BL(): TerminalNode {
		return this.getToken(MhdlParser.BL, 0);
	}
	public pinIndex(): PinIndexContext {
		return this.getTypedRuleContext(PinIndexContext, 0) as PinIndexContext;
	}
	public BR(): TerminalNode {
		return this.getToken(MhdlParser.BR, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_inputPin;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterInputPin) {
	 		listener.enterInputPin(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitInputPin) {
	 		listener.exitInputPin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitInputPin) {
			return visitor.visitInputPin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputPinContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputPinName(): OutputPinNameContext {
		return this.getTypedRuleContext(OutputPinNameContext, 0) as OutputPinNameContext;
	}
	public outputBusName(): OutputBusNameContext {
		return this.getTypedRuleContext(OutputBusNameContext, 0) as OutputBusNameContext;
	}
	public BL(): TerminalNode {
		return this.getToken(MhdlParser.BL, 0);
	}
	public pinIndex(): PinIndexContext {
		return this.getTypedRuleContext(PinIndexContext, 0) as PinIndexContext;
	}
	public BR(): TerminalNode {
		return this.getToken(MhdlParser.BR, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_outputPin;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterOutputPin) {
	 		listener.enterOutputPin(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitOutputPin) {
	 		listener.exitOutputPin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitOutputPin) {
			return visitor.visitOutputPin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputBusContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inputBusName(): InputBusNameContext {
		return this.getTypedRuleContext(InputBusNameContext, 0) as InputBusNameContext;
	}
	public BL(): TerminalNode {
		return this.getToken(MhdlParser.BL, 0);
	}
	public busIndexStart(): BusIndexStartContext {
		return this.getTypedRuleContext(BusIndexStartContext, 0) as BusIndexStartContext;
	}
	public CL(): TerminalNode {
		return this.getToken(MhdlParser.CL, 0);
	}
	public busIndexEnd(): BusIndexEndContext {
		return this.getTypedRuleContext(BusIndexEndContext, 0) as BusIndexEndContext;
	}
	public BR(): TerminalNode {
		return this.getToken(MhdlParser.BR, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_inputBus;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterInputBus) {
	 		listener.enterInputBus(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitInputBus) {
	 		listener.exitInputBus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitInputBus) {
			return visitor.visitInputBus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputBusContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public outputBusName(): OutputBusNameContext {
		return this.getTypedRuleContext(OutputBusNameContext, 0) as OutputBusNameContext;
	}
	public BL(): TerminalNode {
		return this.getToken(MhdlParser.BL, 0);
	}
	public busIndexStart(): BusIndexStartContext {
		return this.getTypedRuleContext(BusIndexStartContext, 0) as BusIndexStartContext;
	}
	public CL(): TerminalNode {
		return this.getToken(MhdlParser.CL, 0);
	}
	public busIndexEnd(): BusIndexEndContext {
		return this.getTypedRuleContext(BusIndexEndContext, 0) as BusIndexEndContext;
	}
	public BR(): TerminalNode {
		return this.getToken(MhdlParser.BR, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_outputBus;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterOutputBus) {
	 		listener.enterOutputBus(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitOutputBus) {
	 		listener.exitOutputBus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitOutputBus) {
			return visitor.visitOutputBus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PinValueContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MhdlParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_pinValue;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterPinValue) {
	 		listener.enterPinValue(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitPinValue) {
	 		listener.exitPinValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitPinValue) {
			return visitor.visitPinValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PinIndexContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MhdlParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_pinIndex;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterPinIndex) {
	 		listener.enterPinIndex(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitPinIndex) {
	 		listener.exitPinIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitPinIndex) {
			return visitor.visitPinIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BusIndexStartContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MhdlParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_busIndexStart;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterBusIndexStart) {
	 		listener.enterBusIndexStart(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitBusIndexStart) {
	 		listener.exitBusIndexStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitBusIndexStart) {
			return visitor.visitBusIndexStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BusIndexEndContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MhdlParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_busIndexEnd;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterBusIndexEnd) {
	 		listener.enterBusIndexEnd(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitBusIndexEnd) {
	 		listener.exitBusIndexEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitBusIndexEnd) {
			return visitor.visitBusIndexEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputPinNameContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(MhdlParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_inputPinName;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterInputPinName) {
	 		listener.enterInputPinName(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitInputPinName) {
	 		listener.exitInputPinName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitInputPinName) {
			return visitor.visitInputPinName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputBusNameContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(MhdlParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_inputBusName;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterInputBusName) {
	 		listener.enterInputBusName(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitInputBusName) {
	 		listener.exitInputBusName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitInputBusName) {
			return visitor.visitInputBusName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputPinNameContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(MhdlParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_outputPinName;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterOutputPinName) {
	 		listener.enterOutputPinName(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitOutputPinName) {
	 		listener.exitOutputPinName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitOutputPinName) {
			return visitor.visitOutputPinName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputBusNameContext extends ParserRuleContext {
	constructor(parser?: MhdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(MhdlParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return MhdlParser.RULE_outputBusName;
	}
	public enterRule(listener: MhdlListener): void {
	    if(listener.enterOutputBusName) {
	 		listener.enterOutputBusName(this);
		}
	}
	public exitRule(listener: MhdlListener): void {
	    if(listener.exitOutputBusName) {
	 		listener.exitOutputBusName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MhdlVisitor<Result>): Result {
		if (visitor.visitOutputBusName) {
			return visitor.visitOutputBusName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
