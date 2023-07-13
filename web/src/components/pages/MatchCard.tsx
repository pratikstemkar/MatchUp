import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { slideLeft, slideRight } from "../../lib/utils";
import { Link } from "react-router-dom";

const MatchCard = () => {
	return (
		<>
			<div className="relative">
				<div
					id="slider"
					className="flex items-center overflow-x-auto scroll-smooth py-2 no-scrollbar w-full"
				>
					<ChevronLeftIcon
						onClick={slideLeft}
						className="absolute start-0 bg-slate-400 rounded-full hover:cursor-pointer opacity-20 hover:opacity-100 hidden md:block"
					/>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">
							<Link to="/match/23fx">3rd ODI • Ind v Aus World Cup</Link>
						</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">3rd ODI</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">3rd ODI</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">3rd ODI</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">3rd ODI</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">3rd ODI</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<div className="border p-2 flex-shrink-0 w-[250px] rounded-md ml-2 inline-block">
						<div className="text-sm text-slate-500">3rd ODI</div>
						<div className="">
							<div>IND: 456/4</div>
							<div>AUS: 653/3</div>
						</div>
						<div className="text-sm text-red-500">AUS chose to field.</div>
					</div>
					<ChevronRightIcon
						onClick={slideRight}
						className="absolute right-0 bg-slate-400 rounded-full hover:cursor-pointer opacity-20 hover:opacity-100 hidden md:block"
					/>
				</div>
			</div>
		</>
	);
};

export default MatchCard;
