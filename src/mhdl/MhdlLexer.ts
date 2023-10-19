// Generated from D:/Workspace/undsf/mhrd-projects/mhrd-online/grammar\Mhdl.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MhdlLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, null, null, null, 
                                                   "'Inputs:'", "'Outputs:'", 
                                                   "'Parts:'", "'Wires:'", 
                                                   "','", "';'", "'.'", 
                                                   "':'", "'['", "']'", 
                                                   "'->'" ];
	public static readonly symbolicNames: string[] = [ null, "PART_TYPE", "NAME", 
                                                    "NUMBER", "INPUTS", 
                                                    "OUTPUTS", "PARTS", 
                                                    "WIRES", "CM", "SC", 
                                                    "DT", "CL", "BL", "BR", 
                                                    "TO", "COMMENT", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"PART_TYPE", "NAME", "NUMBER", "INPUTS", "OUTPUTS", "PARTS", "WIRES", 
		"CM", "SC", "DT", "CL", "BL", "BR", "TO", "COMMENT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MhdlLexer._ATN, MhdlLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Mhdl.g4"; }

	public get literalNames(): (string | null)[] { return MhdlLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MhdlLexer.symbolicNames; }
	public get ruleNames(): string[] { return MhdlLexer.ruleNames; }

	public get serializedATN(): number[] { return MhdlLexer._serializedATN; }

	public get channelNames(): string[] { return MhdlLexer.channelNames; }

	public get modeNames(): string[] { return MhdlLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,16,125,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,
	5,0,36,8,0,10,0,12,0,39,9,0,1,1,1,1,5,1,43,8,1,10,1,12,1,46,9,1,1,2,4,2,
	49,8,2,11,2,12,2,50,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,
	14,1,14,1,14,1,14,5,14,103,8,14,10,14,12,14,106,9,14,1,14,1,14,1,14,3,14,
	111,8,14,3,14,113,8,14,1,14,1,14,1,15,1,15,1,15,4,15,120,8,15,11,15,12,
	15,121,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
	11,23,12,25,13,27,14,29,15,31,16,1,0,7,1,0,65,90,2,0,48,57,65,90,2,0,65,
	90,97,122,3,0,48,57,65,90,97,122,1,0,48,57,2,0,10,10,13,13,3,0,9,10,13,
	13,32,32,132,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
	0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
	1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,
	0,1,33,1,0,0,0,3,40,1,0,0,0,5,48,1,0,0,0,7,52,1,0,0,0,9,60,1,0,0,0,11,69,
	1,0,0,0,13,76,1,0,0,0,15,83,1,0,0,0,17,85,1,0,0,0,19,87,1,0,0,0,21,89,1,
	0,0,0,23,91,1,0,0,0,25,93,1,0,0,0,27,95,1,0,0,0,29,98,1,0,0,0,31,119,1,
	0,0,0,33,37,7,0,0,0,34,36,7,1,0,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,
	0,0,37,38,1,0,0,0,38,2,1,0,0,0,39,37,1,0,0,0,40,44,7,2,0,0,41,43,7,3,0,
	0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,4,1,0,0,0,
	46,44,1,0,0,0,47,49,7,4,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,
	51,1,0,0,0,51,6,1,0,0,0,52,53,5,73,0,0,53,54,5,110,0,0,54,55,5,112,0,0,
	55,56,5,117,0,0,56,57,5,116,0,0,57,58,5,115,0,0,58,59,5,58,0,0,59,8,1,0,
	0,0,60,61,5,79,0,0,61,62,5,117,0,0,62,63,5,116,0,0,63,64,5,112,0,0,64,65,
	5,117,0,0,65,66,5,116,0,0,66,67,5,115,0,0,67,68,5,58,0,0,68,10,1,0,0,0,
	69,70,5,80,0,0,70,71,5,97,0,0,71,72,5,114,0,0,72,73,5,116,0,0,73,74,5,115,
	0,0,74,75,5,58,0,0,75,12,1,0,0,0,76,77,5,87,0,0,77,78,5,105,0,0,78,79,5,
	114,0,0,79,80,5,101,0,0,80,81,5,115,0,0,81,82,5,58,0,0,82,14,1,0,0,0,83,
	84,5,44,0,0,84,16,1,0,0,0,85,86,5,59,0,0,86,18,1,0,0,0,87,88,5,46,0,0,88,
	20,1,0,0,0,89,90,5,58,0,0,90,22,1,0,0,0,91,92,5,91,0,0,92,24,1,0,0,0,93,
	94,5,93,0,0,94,26,1,0,0,0,95,96,5,45,0,0,96,97,5,62,0,0,97,28,1,0,0,0,98,
	99,5,47,0,0,99,100,5,47,0,0,100,104,1,0,0,0,101,103,8,5,0,0,102,101,1,0,
	0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,112,1,0,0,0,106,
	104,1,0,0,0,107,113,5,10,0,0,108,110,5,13,0,0,109,111,5,10,0,0,110,109,
	1,0,0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,107,1,0,0,0,112,108,1,0,0,0,
	113,114,1,0,0,0,114,115,6,14,0,0,115,30,1,0,0,0,116,120,7,6,0,0,117,118,
	5,13,0,0,118,120,5,10,0,0,119,116,1,0,0,0,119,117,1,0,0,0,120,121,1,0,0,
	0,121,119,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,0,123,124,6,15,0,0,124,
	32,1,0,0,0,9,0,37,44,50,104,110,112,119,121,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MhdlLexer.__ATN) {
			MhdlLexer.__ATN = new ATNDeserializer().deserialize(MhdlLexer._serializedATN);
		}

		return MhdlLexer.__ATN;
	}


	static DecisionsToDFA = MhdlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}