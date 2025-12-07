import { toPng } from "html-to-image";
import { useRef } from "react";
import { EditableTable } from "./editable-table";
import { Button } from "../ui/button";

const MyTableWithDownload = () => {
	const tableRef = useRef(null);

	const handleDownload = () => {
		if (tableRef.current === null) return;

		toPng(tableRef.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = "table.png";
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.error("Oops, something went wrong!", err);
			});
	};

	return (
		<div>
			<div className="flex justify-center items-center">
				<div className="max-w-3xl" ref={tableRef}>
					<EditableTable />
				</div>
			</div>

			<div className="flex justify-center items-center pt-5">
				<Button onClick={handleDownload}>Download Image</Button>
			</div>
		</div>
	);
};

export default MyTableWithDownload;
