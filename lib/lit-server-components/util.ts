export function getPathFromLastInCallStack(): string | null {
	const stack = new Error().stack!;
	const lines = stack.split('\n');

	for (let i = lines.length - 1; i >= 0; i--) {
		const line = lines[i].trim();

		const match = line.match(/\((.*)(?::\d+:\d+)\)/);
		if (match) {
			return match[1];
		}
	}

	return null;
}

