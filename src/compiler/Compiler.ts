import {CharStreams, CommonTokenStream, ParseTreeWalker} from "antlr4";

import MhdlLexer from "../mhdl/MhdlLexer";
import MhdlParser from "../mhdl/MhdlParser";
import MhdlWalker from "./MhdlWalker";

export default  class Compiler {
  compile(src: string) {
    let cs = CharStreams.fromString(src);
    let lexer = new MhdlLexer(cs);
    let tokens = new CommonTokenStream(lexer);
    let parser = new MhdlParser(tokens);
    let tree = parser.component();
    let walker = new MhdlWalker();
    ParseTreeWalker.DEFAULT.walk(walker, tree);
  }
}