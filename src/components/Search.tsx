import { useRef, KeyboardEvent } from "react";

export interface SearchProps {
	onSearchValue: (value: string) => void;
}

function Search({ onSearchValue }: SearchProps): JSX.Element {
	const inputRef = useRef<HTMLInputElement>();

	const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.code === "Enter") {
			onSearchValue(inputRef.current.value);
		}
	};

	return (
		<input
			type="search"
			ref={inputRef}
			onKeyUp={onEnter}
			className="shadow-lg p-3 w-full border-none rounded-full"
			placeholder="Type a city"
		/>
	);
}

export default Search;
