//!native
//!optimize 2
import data from "./data";

const lookup_map = new Map<number, string>();
data.split("\n").map((line) => {
	const [transcription, unicodes_text] = line.split("\t");
	if (transcription === undefined) return;
	if (unicodes_text === undefined) return;
	const unicodes = unicodes_text.split(",");
	for (const unicode of unicodes) {
		lookup_map.set(utf8.codepoint(unicode)[0], transcription);
	}
});

export function Asciify(text: string): string {
	const strings: string[] = [];
	for (const [index, char_number] of utf8.codes(text)) {
		if (char_number <= 127) {
			strings.push(string.char(char_number));
			continue;
		}
		strings.push(lookup_map.get(char_number) ?? "#");
	}

	return strings.join("");
}
