//!native
//!optimize 2
import Data from "./data";

const lookup_map = new Map<string, string>();
Data.split("\n").map((line) => {
	const [transcription, unicodes_text] = line.split("\t");
	if (transcription === undefined) return;
	if (unicodes_text === undefined) return;
	const unicodes = unicodes_text.split(",");
	for (const unicode of unicodes) {
		lookup_map.set(unicode, transcription);
	}
});

export function Asciify(text: string): string {
	return text
		.split("")
		.map((char) => lookup_map.get(char) ?? "")
		.join("");
}
