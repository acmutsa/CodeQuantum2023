import Image from "next/image";
import Marquee from "./Marquee";

export default function WhoWeAre() {
	return (
		<section className="w-full max-w-[min(100vw,1000px)] mx-auto min-h-[85vh] grid grid-cols-1 md:grid-cols-2 gap-5 p-5 mt-20 md:mt-0">
			<div className="flex md:items-start items-center justify-center flex-col gap-y-5">
				<h1 className="text-red-600 font-black text-6xl border-b-2 pb-1 border-dashed border-red-600 md:text-left text-center">
					Who We Are
				</h1>
				<p className="max-w-[500px] md:text-left text-center font-bold text-xl">
					We are{" "}
					<span className="text-red-600">
						The Association of Computing Machinery - Women's Chapter
					</span>{" "}
					at the University of Texas at San Antonio! We are an all-inclusive organization focused on
					creating an engaging academic, professional, and social network for women and minorities
					in technology. Our purpose is to connect students with leaders and encourage them to
					pursue career opportunities in computing fields and to mentor for academic and
					professional success.
				</p>
			</div>
			<div className="flex items-center justify-end">
				<div className="bg-gradient-radial from-red-700 via-red-700 to-red-500 aspect-square w-full rounded-2xl relative max-w-[400px]">
					<Image
						src={"/img/logo/acmw-logo.svg"}
						fill
						alt="The ACM-W Logo"
						className="object-contain scale-90"
					/>
				</div>
			</div>
		</section>
	);
}
