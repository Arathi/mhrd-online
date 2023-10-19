grammar Mhdl;

component: inputSection outputSection partSection wireSection EOF;

inputSection
    : INPUTS input (CM input)* SC
    ;

outputSection
    : OUTPUTS output (CM output)* SC
    ;

partSection
    : PARTS part (CM part)* SC
    ;

wireSection
    : WIRES wire (CM wire)* SC
    ;

// input / output
input
    : inputPinName
    | inputBusName BL busSize BR
    ;

output
    : outputPinName
    | outputBusName BL busSize BR
    ;

busSize: NUMBER;

// part
part
    : partName partType
    ;

partName: NAME;
partType: PART_TYPE;

// wire
wire
    : startPin TO targetPin
    | startBus TO targetBus
    ;

startPin
    : pinValue
    | inputPin
    | partName DT outputPin
    ;

startBus
    : inputBus
    | partName DT outputBus
    ;

targetPin
    : outputPin
    | partName DT inputPin
    ;

targetBus
    : outputBus
    | partName DT inputBus
    ;

inputPin
    : inputPinName
    | inputBusName BL pinIndex BR
    ;

outputPin
    : outputPinName
    | outputBusName BL pinIndex BR
    ;

inputBus
    : inputBusName
    | inputBusName BL busIndexStart CL busIndexEnd BR
    ;

outputBus
    : outputBusName
    | outputBusName BL busIndexStart CL busIndexEnd BR
    ;

pinValue: NUMBER;
pinIndex: NUMBER;
busIndexStart: NUMBER;
busIndexEnd: NUMBER;

// common
inputPinName: NAME;
inputBusName: NAME;
outputPinName: NAME;
outputBusName: NAME;

// regex
PART_TYPE: [A-Z][0-9A-Z]*;
NAME: [A-Za-z][0-9A-Za-z]*;
NUMBER: [0-9]+;

// constants
INPUTS: 'Inputs:';
OUTPUTS: 'Outputs:';
PARTS: 'Parts:';
WIRES: 'Wires:';

CM: ','; // comma
SC: ';'; // semi-colon
DT: '.'; // dot
CL: ':'; // colon

BL: '['; // brackets left
BR: ']'; // brackets right

TO: '->'; // link to

COMMENT
    : '//' (~ ('\n' | '\r'))* ('\n' | '\r' ('\n')?) -> skip
    ;

WS
    : (' ' | '\t' | '\r' | '\n' | '\r\n')+ -> skip
    ;